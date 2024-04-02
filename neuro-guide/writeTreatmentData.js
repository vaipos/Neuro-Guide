// writeTreatmentsData.js

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function writeTreatmentsData() {
  try {
    
    const treatments = await prisma.treatments.createMany({
      data: [
        {
          diagnosis: 'Addictive disorder',
          fact1: 'Compulsive engagement in rewarding stimuli despite adverse consequences.',
          fact2: 'Affects the brain\'s reward circuitry, leading to cravings and reduced impulse control.',
          fact3: 'Includes substance use disorders (alcohol, drugs) and behavioral addictions (gambling, gaming).',
          fact4: 'Treatments often involve therapy, medication, and support groups.',
          s1: 'Seeking professional help from therapists or support groups is essential.',
          s2: 'Developing healthy coping mechanisms and lifestyle changes can aid recovery.',
          s3: 'Building a strong support network of family and friends is crucial during treatment.',
        },
        {
          diagnosis: 'Anxiety disorder',
          fact1: 'Involves excessive worry, fear, or nervousness that interferes with daily activities.',
          fact2: 'Includes generalized anxiety disorder (GAD), panic disorder, social anxiety disorder, and phobias.',
          fact3: 'Can manifest in physical symptoms such as rapid heartbeat, sweating, and difficulty breathing.',
          fact4: 'Treatment may include therapy, medication, and lifestyle changes.',
          s1: 'Learning relaxation techniques like deep breathing and mindfulness can help manage symptoms.',
          s2: 'Regular exercise and a healthy lifestyle can reduce the severity of symptoms.',
          s3: 'Avoiding excessive caffeine and alcohol consumption can contribute to anxiety management.',
        },
        {
          diagnosis: 'Healthy control',
          fact1: 'Individuals in this group do not exhibit symptoms of any diagnosed psychiatric disorder.',
          fact2: 'Their mental health is considered within the normal range for their age and demographic.',
          fact3: 'Often serve as comparison groups in psychiatric research studies.',
          fact4: 'Maintaining a balanced lifestyle with regular exercise, nutritious diet, and social connections is important.',
          s1: 'Regular health check-ups and screenings can help monitor physical and mental health status.',
          s2: 'Engaging in hobbies and activities that bring joy can contribute to well-being.',
          s3: 'Seeking support from friends, family, or mental health professionals is encouraged if needed.',
        },
        {
          diagnosis: 'Mood disorder',
          fact1: 'Characterized by persistent changes in mood, affecting daily functioning and quality of life.',
          fact2: 'Includes major depressive disorder (depression) and bipolar disorder.',
          fact3: 'Symptoms may include prolonged periods of sadness, hopelessness, and irritability.',
          fact4: 'Treatment often involves medication, therapy, and lifestyle changes.',
          s1: 'Creating a structured daily routine and setting realistic goals can help manage symptoms.',
          s2: 'Participating in pleasurable activities can improve mood and overall well-being.',
          s3: 'Building a support network and communicating openly about feelings can aid coping.',
        },
        {
          diagnosis: 'Obsessive compulsive disorder',
          fact1: 'Characterized by recurrent unwanted thoughts (obsessions) and repetitive behaviors (compulsions).',
          fact2: 'Common obsessions include fears of contamination and intrusive thoughts.',
          fact3: 'Can significantly interfere with daily life if left untreated.',
          fact4: 'Treatment often involves cognitive-behavioral therapy (CBT) and medication.',
          s1: 'Exposure and response prevention (ERP) therapy is highly effective.',
          s2: 'Challenging and reframing obsessive thoughts are key components of treatment.',
          s3: 'Selective serotonin reuptake inhibitors (SSRIs) are commonly prescribed medications.',
        },
        {
          diagnosis: 'Schizophrenia',
          fact1: 'A severe mental disorder characterized by disruptions in thought processes, perceptions, and emotions.',
          fact2: 'Symptoms may include hallucinations, delusions, and disorganized thinking.',
          fact3: 'The exact cause is unknown but believed to involve genetic, environmental, and neurobiological factors.',
          fact4: 'Treatment typically involves antipsychotic medications, therapy, and supportive services.',
          s1: 'Early intervention and ongoing treatment can improve outcomes.',
          s2: 'Supportive therapy, vocational rehabilitation, and family education are important.',
          s3: 'Regular follow-up with mental health professionals is crucial for managing symptoms.',
        },
        {
          diagnosis: 'Trauma and stress related disorder',
          fact1: 'Occurs in response to experiencing or witnessing traumatic events.',
          fact2: 'Symptoms may include intrusive memories, flashbacks, and avoidance of triggers.',
          fact3: 'Can significantly impact daily functioning and quality of life.',
          fact4: 'Treatment may involve therapy, medication, and self-care strategies.',
          s1: 'Seeking professional help from trauma therapists is important for healing.',
          s2: 'Relaxation techniques like deep breathing can help regulate emotions.',
          s3: 'Connecting with supportive friends and family can provide validation and understanding.',
        },
      ],
    });

    console.log('Treatments created:');
    console.log('====================');
    console.log(treatments);
  } catch (error) {
    console.error('Error writing treatments:', error);
  } finally {
    await prisma.$disconnect();
  }
}

writeTreatmentsData();
