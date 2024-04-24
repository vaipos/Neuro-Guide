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
            s4: 'Identify and avoid triggers that can lead to addictive behaviors.',
            s5: 'Engage in physical activities or hobbies to manage cravings and stress.',
            s6: 'Learn relapse prevention strategies to maintain recovery.',
            s7: 'Practice mindfulness and meditation to increase self-awareness and emotional regulation.',
            s8: 'Attend support group meetings regularly for accountability and encouragement.',
            s9: 'Explore alternative therapies like art or music therapy for emotional expression.',
            s10: 'Develop a structured routine and set realistic goals for a balanced lifestyle.',
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
            s4: 'Practice cognitive-behavioral therapy (CBT) to identify and challenge negative thought patterns.',
            s5: 'Gradually expose yourself to anxiety-provoking situations in a controlled manner.',
            s6: 'Develop stress management strategies such as journaling or practicing yoga.',
            s7: 'Establish a consistent sleep routine to promote better rest and relaxation.',
            s8: 'Seek support from loved ones and communicate openly about your experiences.',
            s9: 'Consider joining a support group to connect with others facing similar challenges.',
            s10: 'Explore alternative therapies like aromatherapy or progressive muscle relaxation.',
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
            s4: 'Practice stress management techniques like deep breathing or meditation.',
            s5: 'Maintain a balanced and nutritious diet to support overall health.',
            s6: 'Engage in regular physical activity to promote mental and physical well-being.',
            s7: 'Foster strong social connections and maintain healthy relationships.',
            s8: 'Practice self-care activities like journaling or taking nature walks.',
            s9: 'Seek opportunities for personal growth and learning new skills.',
            s10: 'Maintain a positive mindset and practice gratitude regularly.',
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
            s4: 'Practice mindfulness and meditation to increase emotional awareness and regulation.',
            s5: 'Engage in regular exercise to boost mood and reduce stress levels.',
            s6: 'Develop healthy sleep habits to promote better rest and energy levels.',
            s7: 'Learn cognitive-behavioral techniques to challenge negative thought patterns.',
            s8: 'Explore creative outlets like art, music, or writing for emotional expression.',
            s9: 'Seek professional help from therapists or support groups if needed.',
            s10: 'Consider alternative therapies like light therapy or acupuncture for mood management.',
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
            s4: 'Practice mindfulness and meditation to increase awareness and detachment from obsessions.',
            s5: 'Engage in regular exercise to reduce stress and anxiety levels.',
            s6: 'Develop healthy coping strategies to manage intrusive thoughts and compulsions.',
            s7: 'Seek support from loved ones and communicate openly about your experiences.',
            s8: 'Consider joining a support group to connect with others facing similar challenges.',
            s9: 'Practice self-care activities like journaling or engaging in hobbies.',
            s10: 'Explore alternative therapies like yoga or aromatherapy for relaxation and stress relief.',
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
            s4: 'Develop a structured routine and establish healthy habits.',
            s5: 'Practice stress management techniques like deep breathing or meditation.',
            s6: 'Engage in physical activity to promote overall well-being.',
            s7: 'Foster strong social connections and maintain healthy relationships.',
            s8: 'Seek support from loved ones and communicate openly about your experiences.',
            s9: 'Consider joining a support group to connect with others facing similar challenges.',
            s10: 'Explore alternative therapies like art or music therapy for emotional expression.',
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
            s4: 'Engage in regular exercise to reduce stress and promote overall well-being.',
            s5: 'Practice mindfulness and meditation to increase emotional awareness and regulation.',
            s6: 'Develop healthy coping strategies to manage triggers and emotional responses.',
            s7: 'Consider joining a support group to connect with others who have had similar experiences.',
            s8: 'Explore creative outlets like art, writing, or music for emotional expression and healing.',
            s9: 'Seek professional help for medication if experiencing severe symptoms like insomnia or anxiety.',
            s10: 'Engage in self-care activities like journaling, taking nature walks, or practicing yoga.',
          }
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
