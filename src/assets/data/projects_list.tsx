// id -  used for key in list rendering and to identify project for drawer
// title -  the name of the project
// description -  a short summary shown in the project card
// longDescription -  a detailed description shown in the drawer
// image -  a URL to an image representing the project (optional)
// tags -  an array of tools & technologies used in the project
// liveUrl -  a link to the live demo (optional)
// githubUrl -  a link to the source code repository (optional)
// type -  used to categorize projects (e.g., "Academic Project", "Personal Project")
// duration -  a string representing how long the project took (optional)
// features -  an array of key features or highlights of the project (optional)

const projects = [
  {
    id: 1,
    title: "RAG-Pipeline with Hybrid search and Local LLMs",
    description:
      "Hybrid search RAG pipeline for context-aware question answering. Implemented hybrid retrieval (BM25 + Vector) and Reciprocal Rank Fusion (RRF), refined via cross-encoder reranking for enhanced precision.",
    longDescription:
      "Developed a fully local RAG system using Python, LangChain, Ollama, and ChromaDB for document-based Q&A. Implemented a hybrid retrieval pipeline combining BM25 keyword search with dense vector search and Reciprocal Rank Fusion (RRF), refined via cross-encoder reranking for enhanced precision. Built a multi-format ingestion engine supporting multiple document types (PDF, DOCX, PPTX, HTML, etc.) with markdown-aware chunking to preserve structural context. Created an interactive Streamlit web application featuring document upload, source citations, and adjustable settings, alongside a complete CLI for flexible ingestion and querying.",
    image:
      "https://plus.unsplash.com/premium_photo-1677094310899-02303289cadf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNoYXRib3R8ZW58MHx8MHx8fDA%3D",
    tags: ["Python", "LangChain", "OLlama", "ChromaDB", "Gradio"],
    liveUrl: "#",
    githubUrl: "https://github.com/Harshh206/RAG-Pipeline-with-Hybrid-Search",
    type: "Personal Project",
    duration: "",
    features: [
      "Hybrid Search:** Combines BM25 keyword search and semantic vector search.",
      "Uses a cross-encoder to improve document relevance.",
      "Processes PDF, DOCX, PPTX, XLSX, HTML, TXT, CSV, JSON, etc.",
      "Uses Ollama for private, local embeddings and LLM inference.",
      "Provides a Streamlit interface with source citations for answers.",
    ],
  },

  {
    id: 2,
    title: "Deepfake Detection using DeepLearning",
    description:
      "Use of EfficientNet + TCN for effective real time as well as manual/auto video deepfake detection",
    longDescription:
      "A deep learning-based system designed to combat misinformation by automatically classifying videos as authentic or manipulated (deepfakes). The model combines EfficientNet-B3 for spatial feature extraction from individual video frames with a Temporal Convolutional Network (TCN) to analyze temporal inconsistencies and unnatural movement patterns across frame sequences. The system achieves approximately 88% test accuracy on the Celeb-DF dataset and is optimized for real-time processing, making it suitable for live video streams and social media moderation. The model incorporates stochastic depth regularization, label smoothing, and uses face cropping preprocessing to focus on facial regions. Real-time webcam integration enables live deepfake detection.",
    image:
      "https://images.unsplash.com/photo-1611187401018-15b06c75718f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGRlZXBmYWtlJTIwZGV0ZWN0aW9ufGVufDB8fDB8fHww",
    tags: [
      "Python",
      "PyTorch",
      "EfficientNet-B3",
      "NumPy & Pandas",
      "OpenCV",
      "Matplotlib",
    ],
    liveUrl: "#",
    githubUrl:
      "https://github.com/Harshh206/Deepfake-Detection-using-DeepLearning.git",
    type: "Academic Project",
    duration: "",
    features: [
      "Hybrid CNN + TCN architecture with stochastic depth",
      "Real-time video stream detection via webcam",
      "Automatic face detection and cropping preprocessing",
      "88% test accuracy on Celeb-DF dataset",
      "Training visualization (loss/accuracy curves, confusion matrix)",
      "Support for both manual video upload and real-time detection",
    ],
  },

  {
    id: 3,
    title: "Aircraft Damage Classification & Captioning",
    description:
      "Aircraft damage detection system using VGG16 for binary classification (dent/crack) and BLIP Transformer for automated image captioning and damage summarization.",
    longDescription:
      "This project automates aircraft damage detection to enhance aviation safety and inspection efficiency. The workflow begins with dataset preparation containing 300+ images across dent and crack categories. Images are preprocessed using TensorFlow's ImageDataGenerator with resizing to 224x224 pixels and normalization. A pre-trained VGG16 model serves as the backbone for feature extraction, with its top layers frozen and custom dense layers added for binary classification (dent vs crack). The model is trained for 5 epochs with binary cross-entropy loss and Adam optimizer, achieving ~73% test accuracy. For captioning, the BLIP (Bootstrapping Language-Image Pretraining) transformer model generates both short captions and detailed summaries of damage images. A custom Keras layer integrates BLIP for seamless text generation. Training results include loss/accuracy visualizations. The system demonstrates automated visual inspection capabilities for aviation maintenance applications.",
    image:
      "https://plus.unsplash.com/premium_photo-1661962354730-cda54fa4f9f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: [
      "TensorFlow/Keras",
      "Transformer",
      "PyTorch",
      "scikit-learn",
      "NumPy &Pandas",
      "Matplotlib",
    ],
    liveUrl: "#",
    githubUrl:
      "https://github.com/Harshh206/Aircraft-Damage-Classification-Captioning-using-DeepLearning.git",
    type: "Personal Project",
    duration: "",
    features: [
      "Binary classification (dent vs. crack) using transfer learning with VGG16",
      "Image preprocessing with resizing, normalization, and data augmentation",
      "BLIP transformer model for automatic caption and summary generation",
      "Custom Keras layer integration for seamless BLIP deployment",
      "Training visualization with loss/accuracy curves",
      "Real-time inference on test images with dual output (classification + caption)",
    ],
  },
];

export { projects };
