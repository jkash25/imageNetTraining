const express = require('express');
const AWS = require('aws-sdk');
const app = express();
const port = 3000;
const s3 = new AWS.S3();
const BUCKET_NAME = 'validationimages';

const params2 = {
    Bucket: BUCKET_NAME,
    Key: "LOC_synset_mapping.txt"
};

const dogParams = {
    Bucket: BUCKET_NAME,
    Key: "dogs.txt"
}

async function getObject(params) {
    console.log("get object has been called");
    const data = await s3.getObject(params2).promise();
    const result = data.Body.toString('utf-8');
    console.log("result: " + result);
    return result;
}

async function getDogObject() {
    console.log("get dog object has been called");
    const data = await s3.getObject(dogParams).promise();
    const result = data.Body.toString('utf-8');
    console.log("result: " + result);
    return result;
}

async function imageToCategory(img_path) {
    console.log(img_path);
    console.log("image to category has been calleds")
    const data = await getObject();
    console.log("Data gotten from getObject");
    const lines = data.split(/\r?\n|\r|\n/g);
        const synset_map = lines.reduce((map, line) => {
            map[line.slice(0, 9)] = line.slice(10);
            return map;
        }, {});
        console.log(img_path.slice(74,83))
        if (img_path.includes("split_10")) {
            const out = synset_map[img_path.slice(75,84)]
            console.log("split 10 image. Out: " + out)
            return out;
        }
        else {
            const out = synset_map[img_path.slice(74, 83)];
            console.log("Out:", out); 
            return out;
        }
}


app.get(`/get-random-image-url`, async (req, res) => {
    try {
        const params = {
            Bucket: BUCKET_NAME,
            Delimiter: '/',
        };
        randomNum = Math.floor(Math.random() * 10);
        const objects = await s3.listObjectsV2(params).promise();
        randomFolder = objects.CommonPrefixes[randomNum]['Prefix']
        if (!objects.Contents || objects.Contents.length === 0) {
            console.log("error: No images found in the bucket" );
        }
        const objectParams = {
            Bucket: BUCKET_NAME,
            Prefix: randomFolder,
        }
        const objectList = await s3.listObjectsV2(objectParams).promise()
        const randomIndex = Math.floor(Math.random() * objectList.Contents.length);
        const randomImage = objectList.Contents[randomIndex].Key;

        const signedUrlParams = {
            Bucket: BUCKET_NAME,
            Key: randomImage,
            Expires: 60, 
        };

        const signedUrl = s3.getSignedUrl('getObject', signedUrlParams);

        res.json({imageUrl: signedUrl});
        console.log(signedUrl);
    } catch (err) {
        console.error('Error fetching random image from S3:', err);
        res.status(500).json({ error: 'Error fetching random image from S3' });
    }
});


app.get('/get-image-category', async (req, res) => {
    try {
        path = req.query.imageUrl;
        console.log("path: " + path);
        const category = await imageToCategory(path);
        res.json({imageCategory: category})
    } catch (err) {
        console.error("Error: 88 " + err);
    }
})


app.get('/get-categories', async (req, res) => {
 
    try {
        const data = await getObject();
        const categories = data.split('\n')
            //.map(line => line.split(/\s+|,/).slice(1).join(' ').trim())
            .map(line => line.split(/\s/).slice(1).join(' ').trim())
            .filter(category => category);

        res.json(categories);
    } catch (err) {
        console.error("error getting categories: "+ err)
    }
})


app.get('/get-random-dog', async (req, res) => {
       try {
        const data = await getDogObject();
        const categories = data.split('\n').filter(line => line.trim() !== '')
        const randomDog = categories[Math.floor(Math.random() * categories.length)]

        const data2 = await getObject();
        const lines = data2.split('\n').filter(line => line.trim() !== '')
        const matched = lines.find(line => line.toLowerCase().includes(randomDog.toLowerCase()))
        if (!matchedLine) {
            throw new Error(`No match found for category: ${categoryName}`);
        }
        const synset = matchedLine.split(' ')[0];

        res.json(synset);
       } catch (err) {
            console.error("error in get random dog")
       }
       
})


app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});