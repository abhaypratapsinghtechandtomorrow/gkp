export const tests = [
  { id: 1, name: 'Complete Blood Count (CBC)', description: 'Measures different parts of your blood, including red blood cells, white blood cells, and platelets.', price: 300, popular: true, tags: ['blood', 'infection', 'anemia', 'whole body'] },
  { id: 2, name: 'Lipid Profile', description: 'Measures cholesterol levels and triglycerides to assess heart disease risk.', price: 500, popular: true, tags: ['heart', 'cardiac', 'chest', 'cholesterol', 'fat'] },
  { id: 3, name: 'Thyroid Profile (T3, T4, TSH)', description: 'Evaluates thyroid gland function.', price: 600, popular: true, tags: ['thyroid', 'neck', 'hormone', 'gland', 'weight'] },
  { id: 4, name: 'Liver Function Test (LFT)', description: 'Measures enzymes, proteins, and substances produced by the liver to check its health.', price: 450, popular: false, tags: ['liver', 'stomach', 'abdomen', 'hepatic', 'jaundice'] },
  { id: 5, name: 'Kidney Function Test (KFT)', description: 'Evaluates how well the kidneys are working.', price: 500, popular: false, tags: ['kidney', 'renal', 'urine', 'back'] },
  { id: 6, name: 'Blood Sugar Fasting & PP', description: 'Measures blood glucose levels to diagnose or monitor diabetes.', price: 150, popular: true, tags: ['diabetes', 'sugar', 'blood', 'pancreas', 'glucose'] },
  { id: 7, name: 'HbA1c', description: 'Provides an average of your blood sugar control over the past 2 to 3 months.', price: 400, popular: true, tags: ['diabetes', 'sugar', 'blood', 'pancreas', 'hba1c'] },
  { id: 8, name: 'Vitamin D (25-OH)', description: 'Checks for vitamin D deficiency, important for bone health.', price: 800, popular: false, tags: ['bone', 'vitamin', 'weakness', 'joint', 'pain'] },
  { id: 9, name: 'ECG (Electrocardiogram)', description: 'Records the electrical signal from the heart to check for different heart conditions.', price: 350, popular: true, tags: ['heart', 'cardiac', 'chest pain'] },
  { id: 10, name: 'Urine Routine & Microscopy', description: 'Checks for infections, kidney disease, or diabetes through a urine sample.', price: 150, popular: true, tags: ['urine', 'kidney', 'infection', 'bladder'] },
  { id: 11, name: 'X-Ray Chest PA View', description: 'Produces images of the heart, lungs, airways, blood vessels and the bones of the spine and chest.', price: 300, popular: false, tags: ['chest', 'lungs', 'heart', 'ribs', 'cough'] },
  { id: 12, name: 'Full Body Health Checkup', description: 'Comprehensive package covering 60+ parameters including Liver, Kidney, Thyroid, and Lipid profile.', price: 1499, popular: true, tags: ['full body', 'complete', 'all', 'routine', 'whole body'] }
];

export const packages = [
  {
    id: 1,
    category: 'Full Body Checkup',
    name: 'Be Healthy Comprehensive Package (With HbA1c)',
    testCount: 93,
    testsIncluded: ['RA Test Rheumatoid Arthritis Factor', 'Quantitative', 'Amylase Enzymatic', 'Serum', 'CRP (C Reactive Protein) Quantitative', 'Serum', 'Blood Glucose Fasting'],
    price: 1773, originalPrice: 3545,
    fastingRequired: '12 hrs Fasting Required',
    recommendedFor: 'Recommended for Everyone',
    reportTime: 'Reports within 17 Hours',
    popular: true
  },
  {
    id: 2,
    category: 'Full Body Checkup',
    name: 'Healthians Summer Wellness Package - Male',
    testCount: 99,
    testsIncluded: ['RA Test Rheumatoid Arthritis Factor', 'Quantitative', 'Amylase Enzymatic', 'Serum', 'CEA- Carcino Embryonic Antigen (Colorectal Cancer Marker Test)', 'ESR Automated'],
    price: 2130, originalPrice: 4260,
    fastingRequired: '12 hrs Fasting Required',
    recommendedFor: 'Recommended for Male',
    reportTime: 'Reports within 17 Hours',
    popular: true
  },
  {
    id: 3,
    category: 'Full Body Checkup',
    name: 'Healthians Summer Wellness Package - Female',
    testCount: 102,
    testsIncluded: ['RA Test Rheumatoid Arthritis Factor', 'Quantitative', 'Amylase Enzymatic', 'Serum', 'CEA- Carcino Embryonic Antigen (Colorectal Cancer Marker Test)', 'CPK, Total'],
    price: 2130, originalPrice: 4260,
    fastingRequired: '12 hrs Fasting Required',
    recommendedFor: 'Recommended for Female',
    reportTime: 'Reports within 17 Hours',
    popular: true
  },
  {
    id: 4,
    category: 'Fever',
    name: 'Dengue Test',
    testCount: 3,
    testsIncluded: ['Dengue IgG And IgM (Rapid Card)', 'Dengue NS1 Antigen Detection - RAPID Card'],
    price: 656, originalPrice: 2186,
    discountText: 'UPTO 70% OFF',
    fastingRequired: 'No Fasting Required',
    recommendedFor: 'Recommended for Everyone',
    reportTime: 'Report in 10 Hours',
    popular: false
  },
  {
    id: 5,
    category: 'Fever',
    name: 'Healthians Advance Fever Package',
    testCount: 71,
    testsIncluded: ['Chikungunya IgM Antibody', 'COMPLETE BLOOD COUNT', 'CRP (C Reactive Protein) Quantitative', 'Serum', 'Dengue IgG Antibody (Immunoassay)'],
    price: 2394, originalPrice: 7981,
    discountText: 'UPTO 70% OFF',
    fastingRequired: 'No Fasting Required',
    recommendedFor: 'Recommended for Everyone',
    reportTime: 'Report in 11 Hours',
    popular: true
  },
  {
    id: 6,
    category: 'STD',
    name: 'HIV Screening Package',
    testCount: 61,
    testsIncluded: ['Blood Glucose Fasting', 'COMPLETE BLOOD COUNT', 'HIV 1&2 Antibodies', 'Kidney Function Test Advance'],
    price: 1431, originalPrice: 4771,
    discountText: 'UPTO 70% OFF',
    fastingRequired: '12 hrs Fasting Required',
    recommendedFor: 'Recommended for Everyone',
    reportTime: 'Report in 10 Hours',
    popular: false
  },
  {
    id: 7,
    category: 'STD',
    name: 'STD Screening Package',
    testCount: 64,
    testsIncluded: ['Anti HCV Antibody (qualitative)', 'Blood Glucose Fasting', 'COMPLETE BLOOD COUNT', 'Hepatitis B Virus (HBV) HbsAg-Screening Surface Antigen'],
    price: 1631, originalPrice: 5438,
    discountText: 'UPTO 70% OFF',
    fastingRequired: '12 hrs Fasting Required',
    recommendedFor: 'Recommended for Everyone',
    reportTime: 'Report in 11 Hours',
    popular: true
  }
];

export const organs = [
  { id: 1, name: 'Heart', icon: 'heart', tests: 15 },
  { id: 2, name: 'Liver', icon: 'liver', tests: 12 },
  { id: 3, name: 'Kidney', icon: 'kidneys', tests: 18 },
  { id: 4, name: 'Thyroid', icon: 'thyroid', tests: 8 },
  { id: 5, name: 'Diabetes', icon: 'sugar', tests: 10 },
  { id: 6, name: 'Bone', icon: 'bone', tests: 6 }
];

export const services = [
  { id: 1, title: 'Home Sample Collection', description: 'Get your samples collected from the comfort of your home by our expert phlebotomists.', icon: 'home' },
  { id: 2, title: 'Digital Reports', description: 'Access your secure, easy-to-understand reports online or via WhatsApp.', icon: 'file-report' },
  { id: 3, title: 'Corporate Health Checkup', description: 'Comprehensive health screening packages tailored for your employees.', icon: 'building' },
  { id: 4, title: 'Doctor Consultation', description: 'Expert medical advice and consultation based on your diagnostic reports.', icon: 'stethoscope' },
  { id: 5, title: '24/7 Ambulance Support', description: 'Emergency medical transport services available round the clock.', icon: 'building' },
  { id: 6, title: 'Ultrasound & Imaging', description: 'High-resolution imaging services equipped with the latest diagnostic technology.', icon: 'file-report' }
];

export const contact = {
  name: 'Gorakhpur Diagnostic Centre',
  address: 'Medical Chowk, Gorakhpur, UP 273001',
  phone: '+917704866570',
  whatsapp: '+917704866570',
  email: 'info@gorakhpurdiagnostics.com'
};
