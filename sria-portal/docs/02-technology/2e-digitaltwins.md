# 2e. Digital Twins, Assets and People

## Scope

Virtual Worlds (VW) are populated with Digital Twins (DTs), assets and people. DTs are sophisticated virtual replicas designed to mirror aspects of their real-world counterparts with relevant fidelity. This mirroring capability extends to both physical assets and human beings, as well as non-physical but real processes. Critically, these virtual constructs can be interconnected with their real-world referents, enabling continuous monitoring, analysis, and even precise control over their behaviour.

**Important distinctions:**
- **Digital Twins** are intrinsically linked to a real-world entity (an asset or a person) that they represent
- **Digital assets** encompass a broader range of virtual objects, from game items to cinematic effects, which can be entirely imaginary or representations of real objects
- **Avatars** can be representations of real people (e.g., in a social VR space) or entirely fictional characters
- **AI co-pilot avatars** are human-like representations of AI engines serving as human-machine interfaces, distinct from a digital replica of a real or imaginary person

---

## Research Topics for Digital Twins and Assets

### 2e.1 Sensors and Data for Digital Twins

**Problem Definition and Research Gap:** Despite significant progress, substantial gaps remain. Many real-world processes or human physiological states remain under-instrumented. Sensing some quantities can be intrusive, prohibitively expensive, or currently impossible. Integrating diverse sensor types with varying data rates and inherent noise is particularly complex for human data due to privacy and variability. The sheer volume of data necessitates advanced real-time processing. Lack of EU-wide standardisation in DT formats presents a major interoperability hurdle.

**Research and Innovation Objectives:**
- Develop innovative, non-intrusive, cost-effective augmented sensing technologies for challenging physical quantities (assets) and physiological/behavioural parameters (humans)
- Advance real-time data fusion, synchronisation, and reduction methodologies for massive, heterogeneous datasets, integrating with AI-driven analytics
- Establish open EU-wide standards for DT data exchange and communication protocols, ensuring secure cross-company/cross-domain sharing

### 2e.2 Digital Twin Immersion for Perception

**Problem Definition and Research Gap:** Current solutions prioritize data acquisition over intuitive user interpretation. There is a lack of integrated solutions combining real-time visualisation, auralisation, and interactive capabilities. While early prototypes exist (TRL 4-5), mature industrially deployable solutions remain limited. Adoption is nascent, confined to pilot projects in aerospace, manufacturing, smart cities, and early medical applications.

**Research and Innovation Objectives:**
- Develop immersive platforms for real-time visualisation and auralisation of complex DT data within VR/AR environments
- Implement novel methods for integrating heterogeneous data sources into immersive DT environments with cross-device accessibility
- Co-design with end-users through iterative prototyping in real-world industrial, urban, and healthcare contexts

### 2e.3 Real-Time Collaboration Around Digital Twins

**Problem Definition and Research Gap:** Many DT platforms lack robust multi-user collaboration features and sophisticated Attribute-based Access Control (ABAC) mechanisms. While research prototypes exist (TRL 4-5), truly immersive, real-time, multi-scale collaborative DT platforms remain in early stages. Integration into operational workflows is low to medium, concentrated in aerospace, automotive, and energy sectors.

**Research and Innovation Objectives:**
- Design real-time, multi-user DT platforms supporting asymmetric access and seamless cross-device interaction
- Implement advanced ABAC mechanisms and data sovereignty frameworks for secure multi-stakeholder collaboration
- Integrate versioning, annotation, and conflict management systems for complex, multi-scale data handling

### 2e.4 Real-Time Interaction with Digital Twins

**Problem Definition and Research Gap:** High-fidelity models are often too slow for real-time use. Gaps exist in reducing model size while retaining accuracy. Current interaction methods lack realism or intuitiveness. Egocentric hand tracking is limited by occlusion and motion blur. AI models often function as "black boxes," lacking interpretability. Traditional MOR is high TRL, but ML-driven and hybrid MOR approaches are still low TRL.

**Research and Innovation Objectives:**
- Develop advanced Model Order Reduction (MOR) techniques, including ML-driven and hybrid approaches
- Implement novel real-time interaction paradigms focusing on egocentric hand gesture recognition, haptic feedback, and multi-user synchronisation
- Advance Explainable AI (XAI) and neurosymbolic AI for improved interpretability and trustworthiness in safety-critical environments

### 2e.5 Optimisation and Uncertainty Quantification

**Problem Definition and Research Gap:** UQ application in VW is often lacking due to complexity and absence of visualisation methods. Uncertainty is perceived as "not attractive" or too complex. While theoretical UQ techniques boast high TRL (6-9), practical visualisation and standardisation have low TRL (2-5). Quantum Inspired algorithms are in early stages (TRL 2-5). Current end-user adoption remains low.

**Research and Innovation Objectives:**
- Develop methodologies and tools for intuitive visualisation and communication of uncertainty levels in DT predictions
- Advance applied Uncertainty Quantification and multi-attribute optimisation techniques, including Quantum Inspired algorithms
- Conduct HCI research to make end-users aware of inherent uncertainties and empower risk-aware decisions

### 2e.6 3D Object Creation for Visual Representation

**Problem Definition and Research Gap:** Limitations persist in integrating physical and semantic properties within 3D modelling systems. There's a gap between high-fidelity modelling and creative generative approaches. Real-time physical property simulation is limited. Challenges exist in translating text descriptions into physically plausible objects or detailed human representations. Current TRL is approximately 4 with low end-user adoption.

**Research and Innovation Objectives:**
- Develop 3D modelling techniques integrating physical and semantic properties for high-fidelity DTs and accurate avatars
- Research AI/ML-driven generative tools (Text-to-3D, text-to-avatar) for co-creation with physics-aware representations
- Advance methodologies for automated missing part completion and style transfer on 3D models and avatars

### 2e.7 Capturing Real World Asset and Scene Information

**Problem Definition and Research Gap:** Complexity lies in merging multiple information sources (visible and invisible). For Human DTs, capturing includes subtle movements, expressions, and physiological states. Current TRL ranges from 3-6 with low end-user adoption, indicating significant development is still required.

**Research and Innovation Objectives:**
- Develop sensor fusion and data integration pipelines for merging heterogeneous sources into comprehensive 3D DT models
- Research automated segmentation and reconstruction techniques, including NeRF and Gaussian Splatting
- Focus on semantic enrichment of captured 3D data for automatic extraction of functional and contextual information

### 2e.8 Physics Based Modelling

**Problem Definition and Research Gap:** The gap lies in developing scalable, physics-informed simulation frameworks for complex, coupled systems. The challenge is balancing computational intensity with real-time performance. Robust frameworks are needed to combine data-driven approaches with fundamental physics principles.

**Research and Innovation Objectives:**
- Develop scalable, physics-informed simulation frameworks for real-time DT applications across diverse domains
- Research model hybridisation techniques combining inductive and deductive models for high-fidelity, predictive DTs
- Explore methodologies for optimizing computational cost while maintaining predictive accuracy

### 2e.9 Digital Twin Engineering and Connectivity

**Problem Definition and Research Gap:** Current DT implementation is characterized by ad-hoc approaches, restricting validation, reuse, maintenance, and evolution. This impedes opportunistic federation of DTs. The gap includes need for robust DT software architectures, standardized interfaces, intuitive programming abstractions, and advanced validation techniques.

**Research and Innovation Objectives:**
- Develop low-code platforms and advanced modelling concepts that streamline DT engineering
- Establish comprehensive DevOps actions and pipelines for continuous integration, validation, deployment, and evolution
- Research architectural patterns, quality assurance mechanisms, and deployment strategies focusing on uncertainty quantification and security

### 2e.10 Digital Twin Verification and Validation

**Problem Definition and Research Gap:** Current DT development lacks rigorous validation frameworks. A gap exists in methodologies for validating continuously evolving, AI-driven DTs. Model updating is labour-intensive. High-precision indoor localisation and spatio-temporal data management remain challenging. Robust methods to quantify DT fidelity are needed. This benefits from ADRA partnership collaboration.

**Research and Innovation Objectives:**
- Develop adaptive system parameter identification methods, real-time data assimilation, and ML models for drift detection and automated updates
- Create advanced spatio-temporal localisation algorithms with fusion methods for high-precision indoor tracking
- Define robust KPIs and automated testing frameworks for continuously assessing DT fidelity and uncertainty

### 2e.11 Open Standards for Digital Twins

**Problem Definition and Research Gap:** Lack of universally recognized standards for DT terms and architectures hampers interoperability. The problem of integrating disparate DTs has received insufficient exploration. While FMU/FMI, OPC UA, and AAS serve as foundational enablers, they don't encompass full DT functionality and are often field-specific, whereas DT concept is domain-agnostic.

**Research and Innovation Objectives:**
- Advance international standardisation of AAS, FMU/FMI, OPC UA and associated sub model templates
- Research semantic technologies (ontologies, knowledge graphs) and leverage LLMs for robust semantic representation
- Establish standards for assessing DT quality and fidelity, and investigate middleware for robust real-virtual synchronisation

---

## Research Topics for Digital Human Representations

### 2e.12 Sensing Systems for Human Behaviour

**Problem Definition and Research Gap:** Achieving high-fidelity 3D pose estimation without cumbersome suits remains challenging. Camera-based tracking suffers from occlusions. Current VR solutions lack full-body motion capture. Integrating diverse sensors is complex with noise and calibration issues. Non-invasive wearables provide limited data streams and can be unreliable. Interpreting continuous wearable data into meaningful insights is underdeveloped. Collecting sensitive human data raises significant privacy concerns.

**Research and Innovation Objectives:**
- Develop deep learning models and hybrid AI frameworks for marker-less motion capture
- Create lightweight sensor suits and sensor fusion algorithms integrating IMUs, electromagnetic trackers, ultrasound
- Design virtual sensing technology leveraging non-invasive wearable data with physiological models, exploring on-device processing for privacy

### 2e.13 Data Acquisition for Human Digital Twin Creation

**Problem Definition and Research Gap:** Gap exists in seamlessly combining disparate data types into coherent human DT models. Need for standardized protocols and algorithms for real-time multimodal data fusion. Human DTs demand high-quality data, but inputs often have incompleteness or noise. Aggregating sensitive personal data raises privacy concerns. Many health IT systems aren't designed for continuous data flows. Efficiently generating personalized baseline models remains underdeveloped.

**Research and Innovation Objectives:**
- Develop integrated platforms and algorithms to ingest and synthesize diverse data streams with real-time updates
- Create automated toolchains for constructing individual-specific models from raw data
- Establish robust data governance frameworks and technical solutions for privacy preservation

### 2e.14 Behavioural Modelling

**Problem Definition and Research Gap:** Challenge of accurately recognizing emotions across diverse cultures while preserving privacy. Integrating multiple modalities introduces complexities in data collection and synchronisation. Robust algorithms needed to interpret subtle emotional cues and generalize across demographics. Sensitive nature of emotional data necessitates advanced privacy-preserving techniques.

**Research and Innovation Objectives:**
- Develop models combining visual, audio, and physiological sensor signals for robust multimodal emotion and stress detection
- Research early and late fusion techniques for integrating multimodal data streams
- Design privacy-preserving prediction model generation methods with anonymisation of training data

### 2e.15 Human Digital Twin Modelling

**Problem Definition and Research Gap:** Primary gap lies in developing scalable, clinically validated DT frameworks that accurately reflect human physiology complexity. Challenges include integrating heterogeneous data sources, ensuring model interpretability, and maintaining up-to-date patient state representations. Ethical and regulatory frameworks must evolve. Field requires robust methodologies for validation, personalisation, and secure deployment in healthcare environments.

**Research and Innovation Objectives:**
- Develop integrated frameworks for multimodal data fusion to construct and continuously update high-fidelity Human DTs
- Advance predictive modelling techniques for personalized simulation of treatment outcomes and surgical scenarios
- Establish rigorous clinical validation pipelines and regulatory pathways for safety and efficacy
- Investigate privacy-preserving architectures and ethical governance models for consent and data ownership

---

## Strategic Recommendations

### For Industry and Developers
1. **Invest in DT infrastructure:** Build robust sensor networks, data pipelines, and real-time processing capabilities
2. **Adopt open standards:** Implement AAS, FMU/FMI, OPC UA standards for interoperability
3. **Prioritise validation:** Develop continuous validation frameworks and fidelity metrics
4. **Enable immersive interaction:** Create intuitive VR/AR interfaces for DT visualisation and collaboration

### For Research Institutions
1. **Advance physics-informed AI:** Develop hybrid models combining physics-based simulations with data-driven approaches
2. **Research human DTs:** Focus on personalized medicine, surgical planning, and ethical frameworks
3. **Improve sensing technologies:** Create non-intrusive sensors for challenging measurements
4. **Develop UQ methodologies:** Research intuitive visualisation of uncertainty for decision support

### For Policymakers
1. **Establish data governance:** Create frameworks for secure cross-company data sharing with sovereignty and privacy
2. **Support standardisation:** Fund European participation in DT standardisation efforts
3. **Promote EU data spaces:** Invest in Manufacturing-X, Health Data Spaces, and sector-specific ecosystems
4. **Address ethical concerns:** Develop regulations for human DT use ensuring consent and data protection

### Cross-References
- **2a. Visualisation, Sensing, Devices and Immersion:** For sensor technologies and immersive visualisation
- **2b. Real-time User Interaction:** For collaborative DT interfaces and UX design
- **2c. Authoring and Experience Design:** For 3D content creation and physics-based modelling tools
- **2d. Standardisation and Interoperability:** For DT standards and data exchange protocols
- **2f. Applied Artificial Intelligence:** For AI-driven sensing, prediction, and model updating
- **1a. Industry and Logistics:** For industrial DT applications
- **1b. Healthcare and Well-being:** For human DT applications in precision medicine
