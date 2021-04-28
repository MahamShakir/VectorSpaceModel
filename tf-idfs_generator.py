import math
import json

with open('public/data.json') as f:
    index = json.load(f)

tfs = {}
idfs = {}
vsm = {}
for i in range(1,51):
    tfs[i] = {}

#count term frequencies in each document
for doc_id in range(1,51):

    for word in index.keys():
        tfs[doc_id][word] = 0

        for i in range(len(index[word])):
            if(index[word][i][0] == doc_id):
                tfs[doc_id][word] += 1


#count inverted document frequency of each word
for word in index.keys():
    idfs[word] = 0
    temp_doc = 0
    for i in range(len(index[word])):
        if(index[word][i][0] != temp_doc):
            idfs[word] += 1
            temp_doc = index[word][i][0]

    if(idfs[word] != 0):
        idfs[word] = math.log10(50/idfs[word])

with open('public/idfs.json' , 'w') as k:
    k.write(json.dumps(idfs))

#make the vector space model
for doc_id in range(1,51):
    vsm[doc_id] = {}
    for word in index.keys():
        value = tfs[doc_id][word] * idfs[word]
        vsm[doc_id][word] = value

with open('public/vsm.json' , 'w') as m:
    m.write(json.dumps(vsm))