## Back end set up

This model is run locally on MacOS. To set it up on MacOS follow the below steps:

```
conda activate risk-gpt-proofofconcept
cd backend
pip install requirements.txt
pip install -U --pre torch torchvision -f https://download.pytorch.org/whl/nightly/cpu/torch_nightly.html
```

Models are downloaded from here:

- vicuna 7b: (ggml-vic7b-q5_1.bin)[https://huggingface.co/vicuna/ggml-vicuna-7b-1.1/tree/main]
- vicuna 13b: (ggml-vic13b-q4_0.bin) [https://huggingface.co/vicuna/ggml-vicuna-13b-1.1/tree/main]
