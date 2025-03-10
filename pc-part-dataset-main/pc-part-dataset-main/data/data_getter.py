import json

with open('pc-part-dataset-main\pc-part-dataset-main\data\json\cpu.json') as File:
    data = json.load(File)

for i in range(10):
    print(data[i], end=',')