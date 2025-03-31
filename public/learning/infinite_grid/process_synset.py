import json

def process_synset_data(input_file, output_file):
    """
    Processes a text file containing synset IDs and category names,
    and writes the data to a JSON file in the specified format.

    Args:
        input_file (str): Path to the input text file.
        output_file (str): Path to the output JSON file.
    """

    data = []
    try:
        with open(input_file, 'r') as f:
            for line in f:
                line = line.strip()
                if line:  # Check if line is not empty
                    parts = line.split(' ', 1)
                    if len(parts) == 2:
                        synset_id, category_name = parts
                        image_url = f"https://validationimages.s3.us-east-1.amazonaws.com/grids/{synset_id}.jpg"
                        data.append({"name": category_name, "image": image_url})
                    else:
                        print(f"Warning: Invalid line format: {line}") #print warning if line is not in the correct format.

        with open(output_file, 'w') as f:
            json.dump(data, f, indent=2)

        print(f"Data processed and saved to {output_file}")

    except FileNotFoundError:
        print(f"Error: Input file '{input_file}' not found.")
    except Exception as e:
        print(f"An error occurred: {e}")

# Example usage:
input_file_path = 'C:\\Users\\Jai K\\Work\\Georgia Tech\\website\\text\\LOC_synset_mapping.txt'  # Replace with your input file name
output_file_path = 'C:\\Users\\Jai K\\Work\\Georgia Tech\\website\\public\\learning\\infinite_grid\\output.json' # Replace with your output file name.

process_synset_data(input_file_path, output_file_path)