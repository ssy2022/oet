// OET 스피킹 표현 데이터 (10개만 포함)
const oetPhrases = [
  {
    term: "Hello, I’m [Your Name], your [nurse/doctor]. How can I help you today?",
    meaning:
      "안녕하세요, 저는 [당신의 이름]이고, 당신의 [간호사/의사]입니다. 오늘 어떻게 도와드릴까요?",
    category: "Introductions (환자 소개 및 대화 시작)",
  },
  {
    term: "Good morning, my name is [Your Name]. I’m here to discuss your health concerns.",
    meaning:
      "좋은 아침입니다. 제 이름은 [당신의 이름]이고, 건강 문제를 논의하기 위해 왔습니다.",
    category: "Introductions (환자 소개 및 대화 시작)",
  },
  {
    term: "Hi, I’m [Your Name], the [nurse/doctor]. May I have your name, please?",
    meaning:
      "안녕하세요, 저는 [당신의 이름], [간호사/의사]입니다. 성함이 어떻게 되시나요?",
    category: "Introductions (환자 소개 및 대화 시작)",
  },
  {
    term: "Nice to meet you. I’m [Your Name], and I’ll be looking after you today.",
    meaning:
      "만나서 반갑습니다. 저는 [당신의 이름]이고, 오늘 당신을 돌볼 것입니다.",
    category: "Introductions (환자 소개 및 대화 시작)",
  },
  {
    term: "Hello, I’m here to talk about your condition. How are you feeling?",
    meaning:
      "안녕하세요, 당신의 상태에 대해 이야기하려고 왔습니다. 기분이 어떠신가요?",
    category: "Introductions (환자 소개 및 대화 시작)",
  },
  {
    term: "I can see this must be quite worrying for you.",
    meaning: "이 상황이 당신에게 상당히 걱정스러울 것 같아요.",
    category: "Expressing Empathy (공감 표현)",
  },
  {
    term: "It sounds like you’re feeling quite uncomfortable.",
    meaning: "꽤 불편하신 것 같네요.",
    category: "Expressing Empathy (공감 표현)",
  },
  {
    term: "I understand this situation can be stressful.",
    meaning: "이 상황이 스트레스를 줄 수 있다는 점을 이해합니다.",
    category: "Expressing Empathy (공감 표현)",
  },
  {
    term: "I’m sorry to hear you’ve been feeling this way.",
    meaning: "이렇게 느끼셨다니 유감입니다.",
    category: "Expressing Empathy (공감 표현)",
  },
  {
    term: "It must be difficult dealing with this condition.",
    meaning: "이 상태를 다루는 것이 힘들었을 것입니다.",
    category: "Expressing Empathy (공감 표현)",
  },
  {
    term: "I can imagine how challenging this is for you.",
    meaning: "이것이 당신에게 얼마나 어려운지 상상할 수 있습니다.",
    category: "Expressing Empathy (공감 표현)",
  },
  {
    term: "I understand your concerns, and I’m here to help.",
    meaning: "당신의 걱정을 이해하며, 도와드리기 위해 여기 있습니다.",
    category: "Expressing Empathy (공감 표현)",
  },
  {
    term: "It sounds like you’ve been through a lot.",
    meaning: "많은 일을 겪으신 것 같네요.",
    category: "Expressing Empathy (공감 표현)",
  },
  {
    term: "I’m here to support you through this.",
    meaning: "이 과정을 통해 당신을 지원하기 위해 여기 있습니다.",
    category: "Expressing Empathy (공감 표현)",
  },
  {
    term: "I can see why you might feel anxious about this.",
    meaning: "왜 이로 인해 불안해하시는지 알겠습니다.",
    category: "Expressing Empathy (공감 표현)",
  },
  {
    term: "Can you tell me more about your symptoms?",
    meaning: "증상에 대해 더 말씀해 주시겠어요?",
    category: "Gathering Information (정보 수집 및 질문)",
  },
  {
    term: "When did you first notice this problem?",
    meaning: "이 문제를 처음 언제 알아차리셨나요?",
    category: "Gathering Information (정보 수집 및 질문)",
  },
  {
    term: "How long have you been experiencing these symptoms?",
    meaning: "이 증상을 얼마나 오랫동안 겪으셨나요?",
    category: "Gathering Information (정보 수집 및 질문)",
  },
  {
    term: "Can you describe the pain for me? Is it sharp or dull?",
    meaning: "통증을 설명해 주시겠어요? 날카로운가요, 둔한가요?",
    category: "Gathering Information (정보 수집 및 질문)",
  },
  {
    term: "Have you had any similar issues in the past?",
    meaning: "과거에 비슷한 문제를 겪으신 적이 있나요?",
    category: "Gathering Information (정보 수집 및 질문)",
  },
  {
    term: "Are there any specific triggers for your symptoms?",
    meaning: "증상을 유발하는 특정 요인이 있나요?",
    category: "Gathering Information (정보 수집 및 질문)",
  },
  {
    term: "How severe is the discomfort on a scale of 1 to 10?",
    meaning: "불편함의 정도를 1에서 10까지의 척도로 표현하면 얼마나 되나요?",
    category: "Gathering Information (정보 수집 및 질문)",
  },
  {
    term: "Have you been taking any medication for this?",
    meaning: "이에 대해 약을 복용하셨나요?",
    category: "Gathering Information (정보 수집 및 질문)",
  },
  {
    term: "Can you let me know if anything makes it better or worse?",
    meaning: "증상을 완화하거나 악화시키는 것이 있는지 알려주시겠어요?",
    category: "Gathering Information (정보 수집 및 질문)",
  },
  {
    term: "Is there anything else you’d like to share about your condition?",
    meaning: "상태에 대해 더 공유하고 싶은 것이 있나요?",
    category: "Gathering Information (정보 수집 및 질문)",
  },
  {
    term: "Just to clarify, are you saying the pain started last week?",
    meaning: "명확히 하기 위해, 통증이 지난주에 시작되었다고 하신 건가요?",
    category: "Clarifying and Confirming (확인 및 명확화)",
  },
  {
    term: "Let me make sure I understand—you’re feeling tired all the time?",
    meaning: "제대로 이해했는지 확인하고 싶습니다—항상 피곤하시다고요?",
    category: "Clarifying and Confirming (확인 및 명확화)",
  },
  {
    term: "So, you’re concerned about the side effects of this medication, correct?",
    meaning: "그래서, 이 약의 부작용에 대해 걱정하시는 거죠, 맞나요?",
    category: "Clarifying and Confirming (확인 및 명확화)",
  },
  {
    term: "Can I confirm that you’ve been following the prescribed treatment?",
    meaning: "처방된 치료를 따르고 계신지 확인할 수 있을까요?",
    category: "Clarifying and Confirming (확인 및 명확화)",
  },
  {
    term: "Just to be clear, the symptoms occur mainly at night?",
    meaning: "명확히 하기 위해, 증상이 주로 밤에 나타난다고요?",
    category: "Clarifying and Confirming (확인 및 명확화)",
  },
  {
    term: "Am I right in understanding that you’ve had no relief from the medication?",
    meaning: "약으로 전혀 완화되지 않았다고 이해해도 되나요?",
    category: "Clarifying and Confirming (확인 및 명확화)",
  },
  {
    term: "Let me check—have you experienced this before?",
    meaning: "확인해 보겠습니다—이전에 이런 경험을 하셨나요?",
    category: "Clarifying and Confirming (확인 및 명확화)",
  },
  {
    term: "To summarize, you’re worried about your recent test results?",
    meaning: "요약하자면, 최근 검사 결과에 대해 걱정하시는 건가요?",
    category: "Clarifying and Confirming (확인 및 명확화)",
  },
  {
    term: "Can you confirm if this is the first time you’ve had this issue?",
    meaning: "이 문제가 처음인지 확인해 주시겠어요?",
    category: "Clarifying and Confirming (확인 및 명확화)",
  },
  {
    term: "I want to ensure I’ve got this right—are you feeling short of breath?",
    meaning: "제대로 이해했는지 확인하고 싶습니다—숨이 가쁘신가요?",
    category: "Clarifying and Confirming (확인 및 명확화)",
  },
  {
    term: "Let me explain what’s causing your symptoms.",
    meaning: "증상의 원인을 설명드리겠습니다.",
    category: "Explaining Conditions or Procedures (상태/절차 설명)",
  },
  {
    term: "Based on what you’ve told me, it sounds like [condition].",
    meaning: "당신이 말씀해 주신 바에 따르면, [질환]으로 보입니다.",
    category: "Explaining Conditions or Procedures (상태/절차 설명)",
  },
  {
    term: "This condition is quite common and can be managed effectively.",
    meaning: "이 상태는 꽤 흔하며 효과적으로 관리할 수 있습니다.",
    category: "Explaining Conditions or Procedures (상태/절차 설명)",
  },
  {
    term: "The test we’re recommending will help us understand your condition better.",
    meaning:
      "우리가 추천하는 검사는 당신의 상태를 더 잘 이해하는 데 도움이 될 것입니다.",
    category: "Explaining Conditions or Procedures (상태/절차 설명)",
  },
  {
    term: "The medication works by reducing inflammation in your body.",
    meaning: "이 약은 신체의 염증을 줄이는 방식으로 작용합니다.",
    category: "Explaining Conditions or Procedures (상태/절차 설명)",
  },
  {
    term: "This procedure is straightforward and usually takes about 20 minutes.",
    meaning: "이 절차는 간단하며 보통 20분 정도 걸립니다.",
    category: "Explaining Conditions or Procedures (상태/절차 설명)",
  },
  {
    term: "The treatment plan is designed to help relieve your symptoms.",
    meaning: "치료 계획은 당신의 증상을 완화하도록 설계되었습니다.",
    category: "Explaining Conditions or Procedures (상태/절차 설명)",
  },
  {
    term: "We’re suggesting this approach to improve your quality of life.",
    meaning:
      "우리는 당신의 삶의 질을 향상시키기 위해 이 접근법을 제안하고 있습니다.",
    category: "Explaining Conditions or Procedures (상태/절차 설명)",
  },
  {
    term: "This condition can be managed with a combination of medication and lifestyle changes.",
    meaning: "이 상태는 약물과 생활습관 변화의 조합으로 관리할 수 있습니다.",
    category: "Explaining Conditions or Procedures (상태/절차 설명)",
  },
  {
    term: "Let me walk you through what to expect during the procedure.",
    meaning: "절차 중에 무엇을 기대할 수 있는지 설명드리겠습니다.",
    category: "Explaining Conditions or Procedures (상태/절차 설명)",
  },
  {
    term: "I’d recommend starting with a low dose of this medication.",
    meaning: "이 약을 저용량으로 시작하는 것을 추천드립니다.",
    category: "Providing Advice and Recommendations (조언 및 권장)",
  },
  {
    term: "It’s important to rest as much as possible to aid recovery.",
    meaning: "회복을 돕기 위해 가능한 한 많이 쉬는 것이 중요합니다.",
    category: "Providing Advice and Recommendations (조언 및 권장)",
  },
  {
    term: "I suggest keeping a symptom diary to track any changes.",
    meaning: "변화를 추적하기 위해 증상 일기를 작성하는 것을 제안합니다.",
    category: "Providing Advice and Recommendations (조언 및 권장)",
  },
  {
    term: "To help with your condition, try to avoid [specific trigger].",
    meaning: "상태를 돕기 위해 [특정 유발 요인]을 피하도록 하세요.",
    category: "Providing Advice and Recommendations (조언 및 권장)",
  },
  {
    term: "I’d advise drinking plenty of water to stay hydrated.",
    meaning: "수분을 유지하기 위해 물을 많이 마시는 것을 권장합니다.",
    category: "Providing Advice and Recommendations (조언 및 권장)",
  },
  {
    term: "It might help to follow a balanced diet rich in [specific nutrients].",
    meaning:
      "[특정 영양소]가 풍부한 균형 잡힌 식단을 따르는 것이 도움이 될 수 있습니다.",
    category: "Providing Advice and Recommendations (조언 및 권장)",
  },
  {
    term: "I recommend scheduling a follow-up appointment in two weeks.",
    meaning: "2주 후에 후속 약속을 잡는 것을 추천합니다.",
    category: "Providing Advice and Recommendations (조언 및 권장)",
  },
  {
    term: "To manage your pain, you could try [specific technique].",
    meaning: "통증을 관리하기 위해 [특정 기술]을 시도해 볼 수 있습니다.",
    category: "Providing Advice and Recommendations (조언 및 권장)",
  },
  {
    term: "It’s a good idea to start this treatment as soon as possible.",
    meaning: "이 치료를 가능한 한 빨리 시작하는 것이 좋습니다.",
    category: "Providing Advice and Recommendations (조언 및 권장)",
  },
  {
    term: "I suggest speaking with a specialist for further evaluation.",
    meaning: "추가 평가를 위해 전문가와 상담하는 것을 제안합니다.",
    category: "Providing Advice and Recommendations (조언 및 권장)",
  },
  {
    term: "I want to reassure you that this is a treatable condition.",
    meaning: "이 상태는 치료 가능한 상태라는 점을 안심시켜드리고 싶습니다.",
    category: "Reassuring the Patient (환자 안심시키기)",
  },
  {
    term: "We’re here to support you every step of the way.",
    meaning: "우리는 모든 단계에서 당신을 지원하기 위해 여기 있습니다.",
    category: "Reassuring the Patient (환자 안심시키기)",
  },
  {
    term: "There’s no need to worry; we’ll find the best solution for you.",
    meaning: "걱정할 필요 없습니다. 당신에게 최선의 해결책을 찾을 것입니다.",
    category: "Reassuring the Patient (환자 안심시키기)",
  },
  {
    term: "This is a common issue, and we have effective treatments available.",
    meaning: "이것은 흔한 문제이며, 효과적인 치료법이 있습니다.",
    category: "Reassuring the Patient (환자 안심시키기)",
  },
  {
    term: "I’m confident we can manage your symptoms with this plan.",
    meaning: "이 계획으로 당신의 증상을 관리할 수 있다고 확신합니다.",
    category: "Reassuring the Patient (환자 안심시키기)",
  },
  {
    term: "We’ll monitor your condition closely to ensure you’re improving.",
    meaning: "당신이 개선되고 있는지 면밀히 모니터링할 것입니다.",
    category: "Reassuring the Patient (환자 안심시키기)",
  },
  {
    term: "You’re in good hands, and we’ll work together to address this.",
    meaning: "당신은 잘 관리되고 있으며, 함께 이 문제를 해결할 것입니다.",
    category: "Reassuring the Patient (환자 안심시키기)",
  },
  {
    term: "This treatment has helped many patients in similar situations.",
    meaning: "이 치료는 비슷한 상황의 많은 환자들에게 도움이 되었습니다.",
    category: "Reassuring the Patient (환자 안심시키기)",
  },
  {
    term: "We’ll make sure you’re comfortable throughout the process.",
    meaning: "과정 내내 당신이 편안하도록 할 것입니다.",
    category: "Reassuring the Patient (환자 안심시키기)",
  },
  {
    term: "I’m here to answer any questions to help put your mind at ease.",
    meaning: "마음을 편안하게 하기 위해 질문에 답변드리겠습니다.",
    category: "Reassuring the Patient (환자 안심시키기)",
  },
  {
    term: "I understand your concern, and I’d like to explain why this is necessary.",
    meaning: "당신의 우려를 이해하며, 왜 이것이 필요한지 설명하고 싶습니다.",
    category: "Handling Concerns or Questions (환자의 우려/질문 다루기)",
  },
  {
    term: "That’s a great question—let me clarify how this works.",
    meaning: "훌륭한 질문입니다—어떻게 작동하는지 설명드리겠습니다.",
    category: "Handling Concerns or Questions (환자의 우려/질문 다루기)",
  },
  {
    term: "If you’re worried about side effects, I can explain what to expect.",
    meaning: "부작용에 대해 걱정하신다면, 예상되는 점을 설명드릴 수 있습니다.",
    category: "Handling Concerns or Questions (환자의 우려/질문 다루기)",
  },
  {
    term: "I hear your concerns, and we can explore other options if needed.",
    meaning:
      "당신의 우려를 들었으며, 필요하다면 다른 옵션을 탐색할 수 있습니다.",
    category: "Handling Concerns or Questions (환자의 우려/질문 다루기)",
  },
  {
    term: "Let me address that—here’s how we’ll manage any risks.",
    meaning:
      "그 점에 대해 설명드리겠습니다—위험을 어떻게 관리할지 알려드립니다.",
    category: "Handling Concerns or Questions (환자의 우려/질문 다루기)",
  },
  {
    term: "It’s normal to feel unsure; let me go over the details again.",
    meaning: "확신이 없으신 게 정상입니다. 다시 세부 사항을 설명드리겠습니다.",
    category: "Handling Concerns or Questions (환자의 우려/질문 다루기)",
  },
  {
    term: "If you’re concerned about the cost, we can discuss support options.",
    meaning: "비용에 대해 걱정하신다면, 지원 옵션을 논의할 수 있습니다.",
    category: "Handling Concerns or Questions (환자의 우려/질문 다루기)",
  },
  {
    term: "I can provide more information about this treatment if you’d like.",
    meaning: "원하시면 이 치료에 대해 더 많은 정보를 제공할 수 있습니다.",
    category: "Handling Concerns or Questions (환자의 우려/질문 다루기)",
  },
  {
    term: "Your question is important—here’s what you need to know.",
    meaning: "당신의 질문은 중요합니다—알아야 할 점을 알려드리겠습니다.",
    category: "Handling Concerns or Questions (환자의 우려/질문 다루기)",
  },
  {
    term: "Let’s talk about what’s worrying you so we can find a solution.",
    meaning: "걱정되는 점에 대해 이야기하여 해결책을 찾아봅시다.",
    category: "Handling Concerns or Questions (환자의 우려/질문 다루기)",
  },
  {
    term: "What are your thoughts about this treatment plan?",
    meaning: "이 치료 계획에 대해 어떻게 생각하시나요?",
    category: "Encouraging Patient Involvement (환자 참여 유도)",
  },
  {
    term: "Do you have any preferences for how we proceed?",
    meaning: "진행 방식에 대해 선호하시는 바가 있나요?",
    category: "Encouraging Patient Involvement (환자 참여 유도)",
  },
  {
    term: "Is there anything specific you’d like to focus on today?",
    meaning: "오늘 특별히 집중하고 싶은 것이 있나요?",
    category: "Encouraging Patient Involvement (환자 참여 유도)",
  },
  {
    term: "How do you feel about starting this medication?",
    meaning: "이 약을 시작하는 것에 대해 어떻게 느끼시나요?",
    category: "Encouraging Patient Involvement (환자 참여 유도)",
  },
  {
    term: "Would you like me to explain any part of this in more detail?",
    meaning: "이에 대해 더 자세히 설명드릴까요?",
    category: "Encouraging Patient Involvement (환자 참여 유도)",
  },
  {
    term: "Are there any lifestyle changes you’re comfortable making?",
    meaning: "편안하게 할 수 있는 생활습관 변화가 있나요?",
    category: "Encouraging Patient Involvement (환자 참여 유도)",
  },
  {
    term: "What’s your main goal for managing this condition?",
    meaning: "이 상태를 관리하는 데 있어 주요 목표는 무엇인가요?",
    category: "Encouraging Patient Involvement (환자 참여 유도)",
  },
  {
    term: "Do you have any questions about the next steps?",
    meaning: "다음 단계에 대해 질문이 있나요?",
    category: "Encouraging Patient Involvement (환자 참여 유도)",
  },
  {
    term: "How can we make this treatment plan work best for you?",
    meaning: "이 치료 계획을 당신에게 가장 잘 맞게 하려면 어떻게 해야 할까요?",
    category: "Encouraging Patient Involvement (환자 참여 유도)",
  },
  {
    term: "Is there anything else you’d like to discuss before we finalize the plan?",
    meaning: "계획을 확정하기 전에 논의하고 싶은 다른 것이 있나요?",
    category: "Encouraging Patient Involvement (환자 참여 유도)",
  },
  {
    term: "Thank you for sharing your concerns; we’ll follow up soon.",
    meaning:
      "당신의 우려를 공유해 주셔서 감사합니다. 곧 후속 조치를 취하겠습니다.",
    category: "Closing the Conversation (대화 마무리)",
  },
  {
    term: "I’ll arrange for a follow-up appointment to check your progress.",
    meaning: "진행 상황을 확인하기 위해 후속 약속을 잡겠습니다.",
    category: "Closing the Conversation (대화 마무리)",
  },
  {
    term: "If you have any questions later, please don’t hesitate to contact us.",
    meaning: "나중에 질문이 있으시면 주저하지 말고 연락 주세요.",
    category: "Closing the Conversation (대화 마무리)",
  },
  {
    term: "We’ll see you again in [timeframe] to review your condition.",
    meaning: "[기간] 후에 다시 뵙고 상태를 검토하겠습니다.",
    category: "Closing the Conversation (대화 마무리)",
  },
  {
    term: "I’m confident this plan will help—let’s stay in touch.",
    meaning: "이 계획이 도움이 될 거라 확신합니다—계속 연락 유지합시다.",
    category: "Closing the Conversation (대화 마무리)",
  },
  {
    term: "Please call us if you notice any changes in your symptoms.",
    meaning: "증상에 변화가 있으면 저희에게 전화해 주세요.",
    category: "Closing the Conversation (대화 마무리)",
  },
  {
    term: "It was great talking with you; take care until our next meeting.",
    meaning: "당신과 이야기해서 좋았습니다. 다음 만남까지 잘 지내세요.",
    category: "Closing the Conversation (대화 마무리)",
  },
  {
    term: "I’ll send you a summary of our discussion for your reference.",
    meaning: "참고용으로 우리 논의의 요약을 보내드리겠습니다.",
    category: "Closing the Conversation (대화 마무리)",
  },
  {
    term: "Let’s schedule the next steps to ensure you’re on track.",
    meaning: "순조롭게 진행되도록 다음 단계를 계획합시다.",
    category: "Closing the Conversation (대화 마무리)",
  },
  {
    term: "Thank you for coming in today; we’ll keep supporting you.",
    meaning: "오늘 와주셔서 감사합니다. 계속 지원하겠습니다.",
    category: "Closing the Conversation (대화 마무리)",
  },
  {
    term: "Let’s work together to find the best way to manage this.",
    meaning: "이를 관리할 최선의 방법을 함께 찾아봅시다.",
    category: "Miscellaneous (기타 유용한 표현)",
  },
  {
    term: "I’ll make sure all your questions are answered before we proceed.",
    meaning: "진행하기 전에 모든 질문에 답변드리겠습니다.",
    category: "Miscellaneous (기타 유용한 표현)",
  },
  {
    term: "This is a team effort, and I’m here to guide you.",
    meaning: "이는 팀 노력이며, 저는 당신을 안내하기 위해 여기 있습니다.",
    category: "Miscellaneous (기타 유용한 표현)",
  },
  {
    term: "We’ll tailor the treatment to suit your needs.",
    meaning: "치료를 당신의 필요에 맞게 조정할 것입니다.",
    category: "Miscellaneous (기타 유용한 표현)",
  },
  {
    term: "Your health is our priority, and we’ll do everything we can to help.",
    meaning: "당신의 건강이 우리의 우선순위이며, 최선을 다해 도울 것입니다.",
    category: "Miscellaneous (기타 유용한 표현)",
  },

  {
    term: "Good morning/afternoon, [Patient’s Name]. Thanks for coming in today.",
    meaning: "좋은 아침/오후입니다, [환자 이름]. 오늘 와주셔서 감사합니다.",
    category: "Greeting the Patient (첫 인사)",
  },
  {
    term: "Hello, it’s nice to see you. How can I help you today?",
    meaning: "안녕하세요, 뵙게 되어 반갑습니다. 오늘 어떻게 도와드릴까요?",
    category: "Greeting the Patient (첫 인사)",
  },
  {
    term: "Good to see you, [Patient’s Name]. What brought you here?",
    meaning: "[환자 이름], 뵙게 되어 반갑습니다. 무슨 일로 오셨나요?",
    category: "Greeting the Patient (첫 인사)",
  },
  {
    term: "Welcome, [Patient’s Name]. I understand you’re here for a check-up.",
    meaning: "환영합니다, [환자 이름]. 검진을 위해 오신 것으로 알고 있습니다.",
    category: "Greeting the Patient (첫 인사)",
  },
  {
    term: "Good afternoon, [Parent’s Name]. Thanks for coming to discuss your daughter’s ultrasound results.",
    meaning:
      "좋은 오후입니다, [부모 이름]. 딸의 초음파 결과를 논의하기 위해 와주셔서 감사합니다.",
    category: "Greeting the Patient (첫 인사)",
  },
  {
    term: "Can you tell me what’s been going on?",
    meaning: "무슨 일이 있었는지 말씀해 주시겠습니까?",
    category: "Asking About the Reason for Visit (왜 왔는지 묻기)",
  },
  {
    term: "What symptoms have you been experiencing?",
    meaning: "어떤 증상을 겪고 계신가요?",
    category: "Asking About the Reason for Visit (왜 왔는지 묻기)",
  },
  {
    term: "Could you share what’s been troubling you lately?",
    meaning: "최근에 어떤 문제가 있었는지 말씀해 주시겠습니까?",
    category: "Asking About the Reason for Visit (왜 왔는지 묻기)",
  },
  {
    term: "I understand you’re here about [specific issue]. Can you tell me more?",
    meaning:
      "[특정 문제]로 오신 것으로 알고 있습니다. 더 자세히 말씀해 주시겠습니까?",
    category: "Asking About the Reason for Visit (왜 왔는지 묻기)",
  },
  {
    term: "Can you describe the bitter taste and burning sensation in your throat?",
    meaning: "목구멍의 쓴맛과 타는 듯한 느낌을 설명해 주시겠습니까?",
    category: "Asking About the Reason for Visit (왜 왔는지 묻기)",
  },
  {
    term: "What brought you in for this check-up today?",
    meaning: "오늘 이 검진을 위해 무엇이 오시게 했나요?",
    category: "Asking About the Reason for Visit (왜 왔는지 묻기)",
  },
  {
    term: "Can you tell me about the ulcers on your tongue and how they’re affecting you?",
    meaning:
      "혀에 생긴 궤양과 그것이 어떤 영향을 미치고 있는지 말씀해 주시겠습니까?",
    category: "Asking About the Reason for Visit (왜 왔는지 묻기)",
  },
  {
    term: "Can you describe what happened during your episode of weakness?",
    meaning: "약화 증상이 있었을 때 무슨 일이 있었는지 설명해 주시겠습니까?",
    category: "Asking About the Reason for Visit (왜 왔는지 묻기)",
  },
  {
    term: "I understand you’re here about your sleeping pills. Can you tell me more?",
    meaning:
      "수면제 때문에 오신 것으로 알고 있습니다. 더 자세히 말씀해 주시겠습니까?",
    category: "Asking About the Reason for Visit (왜 왔는지 묻기)",
  },
  {
    term: "Can you tell me about the pain in your knee and when it started?",
    meaning: "무릎 통증과 언제 시작되었는지 말씀해 주시겠습니까?",
    category: "Asking About the Reason for Visit (왜 왔는지 묻기)",
  },
  {
    term: "What symptoms have you been having with your urinary tract infections?",
    meaning: "요로감염으로 어떤 증상을 겪고 계신가요?",
    category: "Asking About the Reason for Visit (왜 왔는지 묻기)",
  },
  {
    term: "Can you describe the pain in your lower back and when it’s worse?",
    meaning: "허리 통증과 언제 더 심해지는지 설명해 주시겠습니까?",
    category: "Asking About the Reason for Visit (왜 왔는지 묻기)",
  },
  {
    term: "Can you tell me about your daughter’s abdominal pain?",
    meaning: "딸의 복통에 대해 말씀해 주시겠습니까?",
    category: "Asking About the Reason for Visit (왜 왔는지 묻기)",
  },
  {
    term: "I understand you’re concerned about the lump on your back. Can you tell me more?",
    meaning:
      "등에 있는 덩어리에 대해 걱정하시는 것으로 알고 있습니다. 더 자세히 말씀해 주시겠습니까?",
    category: "Asking About the Reason for Visit (왜 왔는지 묻기)",
  },
  {
    term: "Can you tell me more about what’s been happening with [child’s name]?",
    meaning: "[아이 이름]에게 무슨 일이 있었는지 더 말씀해 주시겠습니까?",
    category: "Asking About Family (가족에 대해 묻기)",
  },
  {
    term: "How has [child’s name] been feeling recently?",
    meaning: "[아이 이름]이 최근에 어떻게 지냈나요?",
    category: "Asking About Family (가족에 대해 묻기)",
  },
  {
    term: "Has [child’s name] had any similar issues before?",
    meaning: "[아이 이름]이 이전에 비슷한 문제를 겪은 적이 있나요?",
    category: "Asking About Family (가족에 대해 묻기)",
  },
  {
    term: "What symptoms has [child’s name] been experiencing?",
    meaning: "[아이 이름]이 어떤 증상을 겪고 있나요?",
    category: "Asking About Family (가족에 대해 묻기)",
  },
  {
    term: "Can you share more about your daughter’s abdominal pain and how long it’s been going on?",
    meaning: "딸의 복통과 그 기간에 대해 더 말씀해 주시겠습니까?",
    category: "Asking About Family (가족에 대해 묻기)",
  },
  {
    term: "I’m sorry to hear you’re feeling this way.",
    meaning: "이렇게 느끼신다니 유감입니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "I can see this is really frustrating for you.",
    meaning: "이 상황이 정말 답답하실 거라 생각됩니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "I understand you’re worried about [specific concern].",
    meaning: "[특정 우려]에 대해 걱정하시는 것이 이해됩니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "Thank you for sharing that—it helps me understand your situation.",
    meaning:
      "그것을 공유해 주셔서 감사합니다. 상황을 이해하는 데 도움이 됩니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "I can imagine how stressful this must be for you.",
    meaning: "이것이 얼마나 스트레스일지 상상이 됩니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "I’m sorry you’re going through this.",
    meaning: "이런 일을 겪고 계셔서 유감입니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "I understand how difficult this situation is for you.",
    meaning: "이 상황이 얼마나 어려운지 이해합니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "It must be tough dealing with [specific issue].",
    meaning: "[특정 문제]를 다루는 것이 힘들었을 것입니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "I can see why you’re feeling upset about this.",
    meaning: "왜 이렇게 속상하신지 알 것 같습니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "I’m here to help you through this, and I understand your concerns.",
    meaning:
      "이 문제를 함께 해결하기 위해 여기 있으며, 귀하의 우려를 이해합니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "It’s completely understandable to feel anxious about [specific issue].",
    meaning: "[특정 문제]에 대해 불안해하는 것이 충분히 이해됩니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "I know this is a lot to take in, and I’m here to support you.",
    meaning:
      "이것이 받아들이기 힘들다는 것을 알고 있으며, 제가 도와드리기 위해 여기 있습니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "I can imagine how hard it is to manage [specific issue].",
    meaning: "[특정 문제]를 관리하는 것이 얼마나 힘든지 상상이 됩니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "I’m sorry this has been so challenging for you.",
    meaning: "이것이 너무 힘들었을 것이라 유감입니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "I understand you’re feeling overwhelmed, and we’ll work through this together.",
    meaning: "압도당하신 것이 이해되며, 함께 해결해 나가겠습니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "I understand you’re alarmed about the reflux and its risks.",
    meaning: "위식도 역류와 그 위험에 대해 걱정하시는 것이 이해됩니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "I can see you’re surprised about your high blood pressure.",
    meaning: "고혈압에 대해 놀라신 것이 보입니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "I’m sorry to hear the ulcers are affecting your work.",
    meaning: "궤양이 일에 영향을 미치고 있다니 유감입니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "I can imagine how worrying that episode must have been.",
    meaning: "그 사건이 얼마나 걱정스러웠을지 상상이 됩니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "I understand the pills have been helping you cope with stress.",
    meaning: "약이 스트레스 대처에 도움이 되고 있다는 것을 이해합니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "I’m sorry to hear your knee pain is stopping you from playing.",
    meaning: "무릎 통증 때문에 운동을 못 하고 있다니 유감입니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "I can see how frustrating it is to have these infections again.",
    meaning: "이 감염이 다시 생겨서 얼마나 답답하실지 알 것 같습니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "I understand the pain is making it hard to sit and train.",
    meaning: "통증 때문에 앉거나 훈련하기 어려운 것을 이해합니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "I’m so sorry to hear about your daughter’s diagnosis. I know this is tough.",
    meaning:
      "딸의 진단 소식을 들어서 정말 유감입니다. 이게 힘들다는 걸 압니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "I can see you’re worried about the lump being cancerous.",
    meaning: "덩어리가 암일까 봐 걱정하시는 것이 보입니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "It must be tough dealing with that bitter taste every morning.",
    meaning: "매일 아침 쓴맛을 다루는 것이 힘들었을 것입니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "I know it’s overwhelming to hear about your blood pressure when you feel healthy.",
    meaning: "건강하다고 느끼는데 혈압 소식을 듣는 것이 부담스러울 것입니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "I can imagine how painful and annoying those ulcers must be when speaking.",
    meaning: "말할 때 그 궤양이 얼마나 아프고 짜증나는지 상상이 됩니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "It’s completely understandable to feel anxious after such a scary episode.",
    meaning: "그렇게 무서운 사건 후에 불안해하는 것이 충분히 이해됩니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "I can see how stressful it must be to rely on pills to sleep.",
    meaning:
      "수면을 위해 약에 의존하는 것이 얼마나 스트레스일지 알 것 같습니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "I understand how disappointing it is to miss your competition because of this pain.",
    meaning:
      "이 통증 때문에 대회를 놓치는 것이 얼마나 실망스러운지 이해합니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "It must be really tiring to deal with these infections so often.",
    meaning: "이 감염을 자주 다루는 것이 정말 피곤할 것입니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "I’m sorry this pain is affecting your training for the competition.",
    meaning: "이 통증이 대회 훈련에 영향을 미치고 있다니 유감입니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "I know this news about your daughter is overwhelming, and I’m here to help.",
    meaning:
      "딸에 대한 이 소식이 부담스럽다는 것을 알고 있으며, 제가 도와드리겠습니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "It’s understandable to feel anxious about the lump and what it might mean.",
    meaning: "덩어리와 그 의미에 대해 불안해하는 것이 이해됩니다.",
    category: "Showing Empathy (공감하기)",
  },
  {
    term: "Can you tell me about your diet and what you usually eat?",
    meaning: "식단과 평소에 어떤 음식을 먹는지 말씀해 주시겠습니까?",
    category: "Asking About Lifestyle (생활 습관 묻기)",
  },
  {
    term: "How much exercise do you get each week?",
    meaning: "일주일에 얼마나 운동하시나요?",
    category: "Asking About Lifestyle (생활 습관 묻기)",
  },
  {
    term: "Do you smoke or drink alcohol? If so, how much?",
    meaning: "담배를 피우거나 술을 마시나요? 그렇다면 얼마나 마시나요?",
    category: "Asking About Lifestyle (생활 습관 묻기)",
  },
  {
    term: "Are you under a lot of stress at the moment?",
    meaning: "현재 많은 스트레스를 받고 계신가요?",
    category: "Asking About Lifestyle (생활 습관 묻기)",
  },
  {
    term: "How much water or other fluids do you drink daily?",
    meaning: "매일 물이나 다른 음료를 얼마나 마시나요?",
    category: "Asking About Lifestyle (생활 습관 묻기)",
  },
  {
    term: "Can you tell me about your smoking habits and how much coffee or alcohol you consume?",
    meaning:
      "흡연 습관과 커피나 알코올을 얼마나 섭취하는지 말씀해 주시겠습니까?",
    category: "Asking About Lifestyle (생활 습관 묻기)",
  },
  {
    term: "Can I ask about your lifestyle, like smoking, drinking, or stress levels?",
    meaning:
      "흡연, 음주, 또는 스트레스 수준과 같은 생활 습관에 대해 물어봐도 될까요?",
    category: "Asking About Lifestyle (생활 습관 묻기)",
  },
  {
    term: "Can you share if you’ve been under stress or had changes in your diet?",
    meaning: "스트레스를 받았거나 식단에 변화가 있었는지 공유해 주시겠습니까?",
    category: "Asking About Lifestyle (생활 습관 묻기)",
  },
  {
    term: "Can you tell me about your stress levels and daily routine?",
    meaning: "스트레스 수준과 일상 루틴에 대해 말씀해 주시겠습니까?",
    category: "Asking About Lifestyle (생활 습관 묻기)",
  },
  {
    term: "Can you share what your diet is like and how much fluid you drink each day?",
    meaning: "식단과 하루에 얼마나 많은 물을 마시는지 공유해 주시겠습니까?",
    category: "Asking About Lifestyle (생활 습관 묻기)",
  },
  {
    term: "Have there been any changes in your exercise routine recently?",
    meaning: "최근 운동 루틴에 변화가 있었나요?",
    category: "Asking About Lifestyle (생활 습관 묻기)",
  },
  {
    term: "Your test results show [specific condition].",
    meaning: "검사 결과가 [특정 상태]를 보여줍니다.",
    category: "Explaining Test Results (검사 결과 설명하기)",
  },
  {
    term: "The tests indicate that you have [condition].",
    meaning: "검사 결과 당신이 [상태]를 가지고 있는 것으로 나타났습니다.",
    category: "Explaining Test Results (검사 결과 설명하기)",
  },
  {
    term: "From the results, it looks like [specific issue].",
    meaning: "결과로 보아 [특정 문제]로 보입니다.",
    category: "Explaining Test Results (검사 결과 설명하기)",
  },
  {
    term: "The [test, e.g., ultrasound] shows [specific finding].",
    meaning: "[검사, 예: 초음파] 결과가 [특정 소견]을 보여줍니다.",
    category: "Explaining Test Results (검사 결과 설명하기)",
  },
  {
    term: "Your symptoms suggest gastro-oesophageal reflux disease, or GERD.",
    meaning: "증상이 위식도 역류 질환, 즉 GERD를 시사합니다.",
    category: "Explaining Test Results (검사 결과 설명하기)",
  },
  {
    term: "Your blood pressure is very high at 190/110.",
    meaning: "혈압이 190/110으로 매우 높습니다.",
    category: "Explaining Test Results (검사 결과 설명하기)",
  },
  {
    term: "The examination shows you have aphthous ulcers on your tongue.",
    meaning: "검사 결과 혀에 아프타성 궤양이 있는 것으로 나타났습니다.",
    category: "Explaining Test Results (검사 결과 설명하기)",
  },
  {
    term: "Your symptoms suggest a possible transient ischaemic attack, or mini-stroke.",
    meaning:
      "증상이 일시적 뇌허혈 발작, 즉 소규모 뇌졸중일 가능성을 시사합니다.",
    category: "Explaining Test Results (검사 결과 설명하기)",
  },
  {
    term: "Your urine test shows you have another urinary tract infection.",
    meaning: "소변 검사 결과 또 다른 요로감염이 있는 것으로 나타났습니다.",
    category: "Explaining Test Results (검사 결과 설명하기)",
  },
  {
    term: "The ultrasound shows your daughter has a kidney tumour, called Wilms’ tumour.",
    meaning:
      "초음파 결과 딸에게 윌름스 종양이라는 신장 종양이 있는 것으로 나타났습니다.",
    category: "Explaining Test Results (검사 결과 설명하기)",
  },
  {
    term: "The lump on your back appears to be a benign lipoma based on examination.",
    meaning: "검사 결과 등에 있는 덩어리는 양성 지방종으로 보입니다.",
    category: "Explaining Test Results (검사 결과 설명하기)",
  },
  {
    term: "It sounds like you have [condition].",
    meaning: "당신이 [상태]를 가지고 있는 것 같습니다.",
    category: "Explaining Diagnosis/Condition (진단/질병에 대해 설명하기)",
  },
  {
    term: "This condition means [simple explanation].",
    meaning: "이 상태는 [간단한 설명]을 의미합니다.",
    category: "Explaining Diagnosis/Condition (진단/질병에 대해 설명하기)",
  },
  {
    term: "[Condition] is caused by [cause].",
    meaning: "[상태]는 [원인]에 의해 발생합니다.",
    category: "Explaining Diagnosis/Condition (진단/질병에 대해 설명하기)",
  },
  {
    term: "This is a common condition and can be managed with treatment.",
    meaning: "이것은 흔한 상태이며 치료로 관리할 수 있습니다.",
    category: "Explaining Diagnosis/Condition (진단/질병에 대해 설명하기)",
  },
  {
    term: "You have GERD, which means stomach acid flows back into your throat, causing a bitter taste.",
    meaning:
      "당신은 GERD를 가지고 있으며, 이는 위산이 목구멍으로 역류하여 쓴맛을 유발하는 것을 의미합니다.",
    category: "Explaining Diagnosis/Condition (진단/질병에 대해 설명하기)",
  },
  {
    term: "Your high blood pressure means your heart is working harder, which can increase health risks.",
    meaning:
      "고혈압은 심장이 더 힘들게 작동하여 건강 위험을 증가시킬 수 있음을 의미합니다.",
    category: "Explaining Diagnosis/Condition (진단/질병에 대해 설명하기)",
  },
  {
    term: "These are aphthous ulcers, likely triggered by stress or other factors.",
    meaning:
      "이것은 아프타성 궤양으로, 스트레스나 다른 요인에 의해 유발되었을 가능성이 큽니다.",
    category: "Explaining Diagnosis/Condition (진단/질병에 대해 설명하기)",
  },
  {
    term: "This could be a transient ischaemic attack, a brief blockage of blood flow to the brain.",
    meaning:
      "이것은 일시적 뇌허혈 발작, 즉 뇌로의 혈류가 일시적으로 차단된 것일 수 있습니다.",
    category: "Explaining Diagnosis/Condition (진단/질병에 대해 설명하기)",
  },
  {
    term: "You’ve likely torn the cartilage in your knee, called a meniscus tear, from intense exercise.",
    meaning:
      "강한 운동으로 인해 무릎 연골이 찢어진 것으로 보이며, 이를 반월상 연골 파열이라고 합니다.",
    category: "Explaining Diagnosis/Condition (진단/질병에 대해 설명하기)",
  },
  {
    term: "You have a urinary tract infection, which is caused by bacteria in the bladder.",
    meaning: "당신은 방광 내 세균으로 인해 요로감염을 가지고 있습니다.",
    category: "Explaining Diagnosis/Condition (진단/질병에 대해 설명하기)",
  },
  {
    term: "Your pain is likely due to overuse of muscles from intense training.",
    meaning:
      "통증은 강한 훈련으로 인한 근육 과다 사용으로 인한 것일 가능성이 큽니다.",
    category: "Explaining Diagnosis/Condition (진단/질병에 대해 설명하기)",
  },
  {
    term: "Your daughter has Wilms’ tumour, a type of kidney cancer common in children.",
    meaning:
      "딸은 소아에서 흔한 신장암의 일종인 윌름스 종양을 가지고 있습니다.",
    category: "Explaining Diagnosis/Condition (진단/질병에 대해 설명하기)",
  },
  {
    term: "The lump is a benign lipoma, a fatty growth that’s not cancerous.",
    meaning: "덩어리는 양성 지방종으로, 암이 아닌 지방 성장입니다.",
    category: "Explaining Diagnosis/Condition (진단/질병에 대해 설명하기)",
  },
  {
    term: "I’d like to order some tests to check [specific issue].",
    meaning: "[특정 문제]를 확인하기 위해 몇 가지 검사를 의뢰하고 싶습니다.",
    category: "Explaining Tests (검사에 대해 설명하기)",
  },
  {
    term: "These tests will help us confirm the diagnosis.",
    meaning: "이 검사들은 진단을 확인하는 데 도움이 될 것입니다.",
    category: "Explaining Tests (검사에 대해 설명하기)",
  },
  {
    term: "We’ll need a [specific test] to get a clearer picture.",
    meaning: "더 명확한 그림을 얻기 위해 [특정 검사]가 필요합니다.",
    category: "Explaining Tests (검사에 대해 설명하기)",
  },
  {
    term: "The test is simple and will help us plan the best treatment.",
    meaning:
      "이 검사는 간단하며 최선의 치료 계획을 세우는 데 도움이 될 것입니다.",
    category: "Explaining Tests (검사에 대해 설명하기)",
  },
  {
    term: "We don’t need tests now, but we may consider an endoscopy later if symptoms persist.",
    meaning:
      "지금은 검사가 필요하지 않지만, 증상이 지속되면 나중에 내시경을 고려할 수 있습니다.",
    category: "Explaining Tests (검사에 대해 설명하기)",
  },
  {
    term: "I’m ordering an ECG, cholesterol test, and urinalysis to check for underlying causes.",
    meaning:
      "근본 원인을 확인하기 위해 심전도, 콜레스테롤 검사, 소변 검사를 의뢰하고 있습니다.",
    category: "Explaining Tests (검사에 대해 설명하기)",
  },
  {
    term: "I recommend a blood test to rule out infection or other conditions.",
    meaning: "감염이나 다른 상태를 배제하기 위해 혈액 검사를 추천합니다.",
    category: "Explaining Tests (검사에 대해 설명하기)",
  },
  {
    term: "We need blood tests and a CT scan to confirm if this was a transient ischaemic attack.",
    meaning:
      "이것이 일시적 뇌허혈 발작인지 확인하기 위해 혈액 검사와 CT 스캔이 필요합니다.",
    category: "Explaining Tests (검사에 대해 설명하기)",
  },
  {
    term: "The ultrasound confirmed the diagnosis, and we’ll arrange specialist tests next.",
    meaning:
      "초음파로 진단이 확인되었으며, 다음으로 전문 검사들을 준비할 것입니다.",
    category: "Explaining Tests (검사에 대해 설명하기)",
  },
  {
    term: "We’ll send the lump for a microscope exam to confirm it’s benign.",
    meaning:
      "덩어리가 양성인지 확인하기 위해 현미경 검사를 위해 보낼 것입니다.",
    category: "Explaining Tests (검사에 대해 설명하기)",
  },
  {
    term: "I recommend [treatment] to help with [specific issue].",
    meaning: "[특정 문제]를 돕기 위해 [치료]를 추천합니다.",
    category: "Explaining Treatment (치료에 대해 설명하기)",
  },
  {
    term: "The treatment involves [specific steps].",
    meaning: "치료는 [특정 단계]를 포함합니다.",
    category: "Explaining Treatment (치료에 대해 설명하기)",
  },
  {
    term: "This medication will help [specific effect].",
    meaning: "이 약은 [특정 효과]를 돕습니다.",
    category: "Explaining Treatment (치료에 대해 설명하기)",
  },
  {
    term: "We’ll start with [treatment] and review in [timeframe].",
    meaning: "[치료]로 시작하여 [기간] 후에 검토할 것입니다.",
    category: "Explaining Treatment (치료에 대해 설명하기)",
  },
  {
    term: "I’m prescribing ranitidine to reduce stomach acid, and we’ll review in a few weeks.",
    meaning:
      "위산을 줄이기 위해 라니티딘을 처방하며, 몇 주 후에 검토할 것입니다.",
    category: "Explaining Treatment (치료에 대해 설명하기)",
  },
  {
    term: "We may need medication, but let’s start with lifestyle changes and further tests.",
    meaning:
      "약이 필요할 수도 있지만, 생활 습관 변화와 추가 검사로 시작합시다.",
    category: "Explaining Treatment (치료에 대해 설명하기)",
  },
  {
    term: "Try rinsing with warm, salty water and using antiseptic gel for the ulcers.",
    meaning: "따뜻한 소금물로 헹구고 궤양에 소독 젤을 사용해 보세요.",
    category: "Explaining Treatment (치료에 대해 설명하기)",
  },
  {
    term: "Follow the RICER regime—rest, ice, compress, elevate—and see a physiotherapist.",
    meaning:
      "RICER 요법—휴식, 얼음, 압박, 올리기—를 따르고 물리치료사를 만나세요.",
    category: "Explaining Treatment (치료에 대해 설명하기)",
  },
  {
    term: "I’m prescribing trimethoprim for three days to treat the infection.",
    meaning: "감염 치료를 위해 3일간 트리메토프림을 처방합니다.",
    category: "Explaining Treatment (치료에 대해 설명하기)",
  },
  {
    term: "Reduce your training and see a physiotherapist for a balanced exercise plan.",
    meaning: "훈련을 줄이고 균형 잡힌 운동 계획을 위해 물리치료사를 만나세요.",
    category: "Explaining Treatment (치료에 대해 설명하기)",
  },
  {
    term: "Your daughter needs to see a paediatric oncologist to start treatment soon.",
    meaning: "딸은 치료를 시작하기 위해 소아 종양 전문의를 만나야 합니다.",
    category: "Explaining Treatment (치료에 대해 설명하기)",
  },
  {
    term: "The surgeon will remove the lump, and we’ll check the wound in two weeks.",
    meaning:
      "외과의사가 덩어리를 제거할 것이며, 2주 후에 상처를 확인할 것입니다.",
    category: "Explaining Treatment (치료에 대해 설명하기)",
  },
  {
    term: "We’ll gradually reduce your dose and try non-medical ways to help you sleep.",
    meaning: "용량을 점진적으로 줄이고 비약물적 방법으로 수면을 돕겠습니다.",
    category: "Explaining Treatment (치료에 대해 설명하기)",
  },
  {
    term: "Try cutting down on [specific habit].",
    meaning: "[특정 습관]을 줄여보세요.",
    category:
      "Advising on Exercise/Lifestyle Changes (운동/생활습관 개선에 대해 조언)",
  },
  {
    term: "Eat smaller meals and avoid eating late at night.",
    meaning: "소량의 식사를 하고 밤늦게 밥을 먹지 마세요.",
    category:
      "Advising on Exercise/Lifestyle Changes (운동/생활습관 개선에 대해 조언)",
  },
  {
    term: "Regular exercise, like walking, can help improve your condition.",
    meaning:
      "걷기와 같은 규칙적인 운동이 상태를 개선하는 데 도움이 될 수 있습니다.",
    category:
      "Advising on Exercise/Lifestyle Changes (운동/생활습관 개선에 대해 조언)",
  },
  {
    term: "Reducing stress through [specific method] could help.",
    meaning: "[특정 방법]을 통해 스트레스를 줄이는 것이 도움이 될 수 있습니다.",
    category:
      "Advising on Exercise/Lifestyle Changes (운동/생활습관 개선에 대해 조언)",
  },
  {
    term: "Avoid spicy foods, cut down on alcohol and smoking, and don’t exercise after meals.",
    meaning: "매운 음식을 피하고, 술과 담배를 줄이며, 식사 후 운동하지 마세요.",
    category:
      "Advising on Exercise/Lifestyle Changes (운동/생활습관 개선에 대해 조언)",
  },
  {
    term: "Try reducing stress and maintaining a healthy diet to lower your blood pressure.",
    meaning: "스트레스를 줄이고 건강한 식단을 유지하여 혈압을 낮추세요.",
    category:
      "Advising on Exercise/Lifestyle Changes (운동/생활습관 개선에 대해 조언)",
  },
  {
    term: "Manage stress with relaxation techniques to help prevent ulcers.",
    meaning: "궤양 예방을 위해 이완 기법으로 스트레스를 관리하세요.",
    category:
      "Advising on Exercise/Lifestyle Changes (운동/생활습관 개선에 대해 조언)",
  },
  {
    term: "Regular exercise and cutting caffeine can improve your sleep naturally.",
    meaning:
      "규칙적인 운동과 카페인 섭취 감소가 자연스러운 수면을 개선할 수 있습니다.",
    category:
      "Advising on Exercise/Lifestyle Changes (운동/생활습관 개선에 대해 조언)",
  },
  {
    term: "Drink more water and practice double voiding to prevent infections.",
    meaning: "물을 더 많이 마시고 이중 배뇨를 실천하여 감염을 예방하세요.",
    category:
      "Advising on Exercise/Lifestyle Changes (운동/생활습관 개선에 대해 조언)",
  },
  {
    term: "Reduce intense exercises like sit-ups and consult a physiotherapist.",
    meaning:
      "윗몸일으키기와 같은 강도 높은 운동을 줄이고 물리치료사와 상담하세요.",
    category:
      "Advising on Exercise/Lifestyle Changes (운동/생활습관 개선에 대해 조언)",
  },
  {
    term: "This condition is treatable, and we’ll work together to manage it.",
    meaning: "이 상태는 치료 가능하며, 함께 관리해 나갈 것입니다.",
    category: "Reassuring the Patient (안심시키기)",
  },
  {
    term: "I’m confident we can control your symptoms with this plan.",
    meaning: "이 계획으로 증상을 조절할 수 있다고 확신합니다.",
    category: "Reassuring the Patient (안심시키기)",
  },
  {
    term: "There’s no need to worry—this is a common issue.",
    meaning: "걱정할 필요 없습니다—이것은 흔한 문제입니다.",
    category: "Reassuring the Patient (안심시키기)",
  },
  {
    term: "We’ll keep monitoring to make sure everything is okay.",
    meaning: "모든 것이 괜찮은지 계속 모니터링할 것입니다.",
    category: "Reassuring the Patient (안심시키기)",
  },
  {
    term: "Reflux is manageable, and we’ll monitor to prevent complications.",
    meaning:
      "역류는 관리 가능하며, 합병증을 예방하기 위해 모니터링할 것입니다.",
    category: "Reassuring the Patient (안심시키기)",
  },
  {
    term: "With the right steps, you’ll still be able to travel and manage this.",
    meaning: "올바른 조치를 취하면 여행하면서도 이를 관리할 수 있습니다.",
    category: "Reassuring the Patient (안심시키기)",
  },
  {
    term: "These ulcers will clear up in a few days with proper care.",
    meaning: "적절한 관리로 이 궤양은 며칠 안에 사라질 것입니다.",
    category: "Reassuring the Patient (안심시키기)",
  },
  {
    term: "We’re doing tests to rule out serious issues, and this can be managed.",
    meaning:
      "심각한 문제를 배제하기 위해 검사를 진행 중이며, 이는 관리 가능합니다.",
    category: "Reassuring the Patient (안심시키기)",
  },
  {
    term: "Wilms’ tumour is treatable, and most children respond well.",
    meaning: "윌름스 종양은 치료 가능하며, 대부분의 아이들이 잘 반응합니다.",
    category: "Reassuring the Patient (안심시키기)",
  },
  {
    term: "The lump is very unlikely to be cancerous, and we’ll confirm with tests.",
    meaning: "덩어리가 암일 가능성은 매우 낮으며, 검사로 확인할 것입니다.",
    category: "Reassuring the Patient (안심시키기)",
  },
  {
    term: "Resting now will help you recover and get back to sports.",
    meaning: "지금 휴식을 취하면 회복하여 스포츠로 돌아갈 수 있습니다.",
    category: "Reassuring the Patient (안심시키기)",
  },
  {
    term: "This is the best way to ensure a quick recovery.",
    meaning: "이것이 빠른 회복을 보장하는 최선의 방법입니다.",
    category: "Convincing the Patient (설득하기)",
  },
  {
    term: "Following this plan will prevent more serious problems.",
    meaning: "이 계획을 따르면 더 심각한 문제를 예방할 수 있습니다.",
    category: "Convincing the Patient (설득하기)",
  },
  {
    term: "I strongly recommend [action] for the best results.",
    meaning: "최상의 결과를 위해 [행동]을 강력히 추천합니다.",
    category: "Convincing the Patient (설득하기)",
  },
  {
    term: "This approach has helped many patients with similar issues.",
    meaning:
      "이 접근법은 비슷한 문제를 가진 많은 환자들에게 도움이 되었습니다.",
    category: "Convincing the Patient (설득하기)",
  },
  {
    term: "Lifestyle changes and ranitidine are the best way to control your reflux.",
    meaning: "생활 습관 변화와 라니티딘이 역류를 조절하는 최선의 방법입니다.",
    category: "Convincing the Patient (설득하기)",
  },
  {
    term: "Gradually reducing pills and trying lifestyle changes is the safest option.",
    meaning:
      "약을 점진적으로 줄이고 생활 습관 변화를 시도하는 것이 가장 안전한 선택입니다.",
    category: "Convincing the Patient (설득하기)",
  },
  {
    term: "Resting your knee now will prevent long-term damage.",
    meaning: "지금 무릎을 쉬게 하면 장기적인 손상을 예방할 수 있습니다.",
    category: "Convincing the Patient (설득하기)",
  },
  {
    term: "Seeing a physiotherapist will help you train safely for the competition.",
    meaning: "물리치료사를 만나면 대회 훈련을 안전하게 할 수 있습니다.",
    category: "Convincing the Patient (설득하기)",
  },
  {
    term: "Antibiotics and more water intake are the best way to stop these infections.",
    meaning: "항생제와 물 섭취 증가는 이 감염을 막는 최선의 방법입니다.",
    category: "Convincing the Patient (설득하기)",
  },
  {
    term: "I’m concerned about [specific issue].",
    meaning: "[특정 문제]에 대해 걱정됩니다.",
    category: "Expressing Concern (우려 표현하기)",
  },
  {
    term: "I’m worried that [specific risk] could happen if we don’t act.",
    meaning: "행동하지 않으면 [특정 위험]이 발생할까 걱정됩니다.",
    category: "Expressing Concern (우려 표현하기)",
  },
  {
    term: "This could lead to [potential complication] if not addressed.",
    meaning: "해결하지 않으면 [잠재적 합병증]으로 이어질 수 있습니다.",
    category: "Expressing Concern (우려 표현하기)",
  },
  {
    term: "I want to prevent any further problems with [specific condition].",
    meaning: "[특정 상태]로 인한 추가 문제를 예방하고 싶습니다.",
    category: "Expressing Concern (우려 표현하기)",
  },
  {
    term: "I’m concerned that smoking and alcohol may be worsening your reflux.",
    meaning: "흡연과 알코올이 역류를 악화시킬까 걱정됩니다.",
    category: "Expressing Concern (우려 표현하기)",
  },
  {
    term: "I’m worried about your high blood pressure increasing stroke risk.",
    meaning: "고혈압이 뇌졸중 위험을 증가시킬까 걱정됩니다.",
    category: "Expressing Concern (우려 표현하기)",
  },
  {
    term: "I’m concerned this could be a mini-stroke, so we need to do tests.",
    meaning: "이것이 소규모 뇌졸중일까 걱정되므로 검사가 필요합니다.",
    category: "Expressing Concern (우려 표현하기)",
  },
  {
    term: "I’m worried about dependency if you keep using sleeping pills.",
    meaning: "수면제를 계속 사용하면 의존성이 생길까 걱정됩니다.",
    category: "Expressing Concern (우려 표현하기)",
  },
  {
    term: "I’m concerned that playing sports now could worsen your injury.",
    meaning: "지금 스포츠를 하면 부상이 악화될까 걱정됩니다.",
    category: "Expressing Concern (우려 표현하기)",
  },
  {
    term: "Does that make sense?",
    meaning: "이해가 되시나요?",
    category: "Checking for Agreement/Understanding (동의, 이해 확인하기)",
  },
  {
    term: "Would that be okay with you?",
    meaning: "그렇게 해도 괜찮으신가요?",
    category: "Checking for Agreement/Understanding (동의, 이해 확인하기)",
  },
  {
    term: "Are you comfortable with this plan?",
    meaning: "이 계획에 편안하신가요?",
    category: "Checking for Agreement/Understanding (동의, 이해 확인하기)",
  },
  {
    term: "Do you have any questions about what we discussed?",
    meaning: "논의한 내용에 대해 질문이 있으신가요?",
    category: "Checking for Agreement/Understanding (동의, 이해 확인하기)",
  },
  {
    term: "Are you okay with trying ranitidine and these lifestyle changes?",
    meaning: "라니티딘과 생활 습관 변화를 시도하는 것에 괜찮으신가요?",
    category: "Checking for Agreement/Understanding (동의, 이해 확인하기)",
  },
  {
    term: "Does the plan for antibiotics and more water intake sound okay?",
    meaning: "항생제와 물 섭취 증가 계획이 괜찮아 보이시나요?",
    category: "Checking for Agreement/Understanding (동의, 이해 확인하기)",
  },
  {
    term: "Are you comfortable with resting and seeing a physiotherapist?",
    meaning: "휴식하고 물리치료사를 만나는 것에 편안하신가요?",
    category: "Checking for Agreement/Understanding (동의, 이해 확인하기)",
  },
  {
    term: "Are you okay with us arranging a specialist appointment?",
    meaning: "전문의 예약을 준비하는 것에 괜찮으신가요?",
    category: "Checking for Agreement/Understanding (동의, 이해 확인하기)",
  },
  {
    term: "Does reducing the pills gradually sound like a good plan?",
    meaning: "약을 점진적으로 줄이는 것이 좋은 계획으로 들리나요?",
    category: "Checking for Agreement/Understanding (동의, 이해 확인하기)",
  },
  {
    term: "Let me explain that for you.",
    meaning: "그것을 설명드리겠습니다.",
    category: "Answering Patient’s Questions (환자의 질문에 답하기)",
  },
  {
    term: "That’s a good question. Here’s what we know…",
    meaning: "좋은 질문입니다. 우리가 아는 바는 다음과 같습니다…",
    category: "Answering Patient’s Questions (환자의 질문에 답하기)",
  },
  {
    term: "I understand your concern, and here’s how we’ll address it.",
    meaning: "당신의 우려를 이해하며, 이렇게 해결할 것입니다.",
    category: "Answering Patient’s Questions (환자의 질문에 답하기)",
  },
  {
    term: "This is what we can expect based on your condition.",
    meaning: "당신의 상태를 기반으로 예상할 수 있는 것은 다음과 같습니다.",
    category: "Answering Patient’s Questions (환자의 질문에 답하기)",
  },
  {
    term: "You asked about the risk of cancer. GERD can sometimes lead to complications, but with treatment, the risk is very low.",
    meaning:
      "암 위험에 대해 물으셨습니다. GERD는 때때로 합병증을 유발할 수 있지만, 치료로 위험은 매우 낮습니다.",
    category: "Answering Patient’s Questions (환자의 질문에 답하기)",
  },
  {
    term: "You’re worried about scarring. The scar will fade over time, and using steristrips can help minimize it.",
    meaning:
      "흉터에 대해 걱정하십니다. 흉터는 시간이 지나면서 옅어질 것이며, 스테리스트립을 사용하면 최소화할 수 있습니다.",
    category: "Answering Patient’s Questions (환자의 질문에 답하기)",
  },
  {
    term: "You asked about prognosis. Wilms’ tumour is treatable, and most children have a good outcome with proper care.",
    meaning:
      "예후에 대해 물으셨습니다. 윌름스 종양은 치료 가능하며, 적절한 관리로 대부분의 아이들이 좋은 결과를 얻습니다.",
    category: "Answering Patient’s Questions (환자의 질문에 답하기)",
  },
  {
    term: "You’re concerned about a full stroke. We’ll do tests and start treatment to reduce that risk.",
    meaning:
      "완전한 뇌졸중에 대해 걱정하십니다. 위험을 줄이기 위해 검사와 치료를 시작할 것입니다.",
    category: "Answering Patient’s Questions (환자의 질문에 답하기)",
  },
  {
    term: "You asked about recurrence. Stress management and a healthy diet can help prevent future ulcers.",
    meaning:
      "재발에 대해 물으셨습니다. 스트레스 관리와 건강한 식단이 미래의 궤양 예방에 도움이 될 수 있습니다.",
    category: "Answering Patient’s Questions (환자의 질문에 답하기)",
  },
  {
    term: "You asked about playing this weekend. Resting now is crucial to avoid long-term damage.",
    meaning:
      "이번 주말 경기에 대해 물으셨습니다. 지금 휴식을 취하는 것이 장기적 손상을 피하는 데 중요합니다.",
    category: "Answering Patient’s Questions (환자의 질문에 답하기)",
  },
  {
    term: "I can see why you’re worried about [specific concern]. Let me reassure you.",
    meaning:
      "[특정 우려]에 대해 걱정하시는 이유를 알겠습니다. 안심시켜드리겠습니다.",
    category: "Addressing Patient’s Specific Concerns (환자의 우려 다루기)",
  },
  {
    term: "I understand your concern about [issue]. Here’s what we can do.",
    meaning:
      "[문제]에 대한 우려를 이해합니다. 우리가 할 수 있는 것은 다음과 같습니다.",
    category: "Addressing Patient’s Specific Concerns (환자의 우려 다루기)",
  },
  {
    term: "Let’s address your worry about [specific concern].",
    meaning: "[특정 우려]에 대해 다룹시다.",
    category: "Addressing Patient’s Specific Concerns (환자의 우려 다루기)",
  },
  {
    term: "It’s natural to feel concerned about [issue], but we have a plan.",
    meaning: "[문제]에 대해 걱정하는 것이 당연하지만, 계획이 있습니다.",
    category: "Addressing Patient’s Specific Concerns (환자의 우려 다루기)",
  },
  {
    term: "I understand you’re worried about cancer. GERD is manageable, and we’ll monitor to prevent complications.",
    meaning:
      "암에 대해 걱정하시는 것을 이해합니다. GERD는 관리 가능하며, 합병증 예방을 위해 모니터링할 것입니다.",
    category: "Addressing Patient’s Specific Concerns (환자의 우려 다루기)",
  },
  {
    term: "I see you’re concerned about your holiday. With proper management, you should be able to travel.",
    meaning:
      "휴일에 대해 걱정하시는 것을 봅니다. 적절한 관리로 여행할 수 있을 것입니다.",
    category: "Addressing Patient’s Specific Concerns (환자의 우려 다루기)",
  },
  {
    term: "You’re worried the lump might be cancerous. It’s very likely benign, and tests will confirm this.",
    meaning:
      "덩어리가 암일까 걱정하십니다. 매우 양성일 가능성이 높으며, 검사로 확인할 것입니다.",
    category: "Addressing Patient’s Specific Concerns (환자의 우려 다루기)",
  },
  {
    term: "I know you’re worried about your daughter’s cancer. We’ll arrange specialist care to ensure the best treatment.",
    meaning:
      "딸의 암에 대해 걱정하시는 것을 압니다. 최상의 치료를 보장하기 위해 전문 의료를 준비할 것입니다.",
    category: "Addressing Patient’s Specific Concerns (환자의 우려 다루기)",
  },
  {
    term: "I understand you’re concerned about coping without pills. We’ll try other ways to manage stress.",
    meaning:
      "약 없이 대처하는 것에 대해 걱정하시는 것을 이해합니다. 스트레스를 관리할 다른 방법을 시도할 것입니다.",
    category: "Addressing Patient’s Specific Concerns (환자의 우려 다루기)",
  },
  {
    term: "You’re worried about recurring infections. Increasing water intake and hygiene practices will help.",
    meaning:
      "재발하는 감염에 대해 걱정하십니다. 물 섭취와 위생 관행을 늘리면 도움이 될 것입니다.",
    category: "Addressing Patient’s Specific Concerns (환자의 우려 다루기)",
  },
  {
    term: "We have a few options to manage this. Let me explain them.",
    meaning: "이를 관리할 몇 가지 선택지가 있습니다. 설명드리겠습니다.",
    category: "Offering Options to the Patient (환자에게 선택지 제시하기)",
  },
  {
    term: "You can choose between [option 1] or [option 2], depending on what suits you.",
    meaning:
      "당신에게 맞는 것에 따라 [옵션 1] 또는 [옵션 2]를 선택할 수 있습니다.",
    category: "Offering Options to the Patient (환자에게 선택지 제시하기)",
  },
  {
    term: "Here are some ways we can address this. Which one feels right for you?",
    meaning: "이를 해결할 몇 가지 방법이 있습니다. 어떤 것이 맞는 것 같나요?",
    category: "Offering Options to the Patient (환자에게 선택지 제시하기)",
  },
  {
    term: "We can try [option] first, or we could consider [alternative].",
    meaning: "먼저 [옵션]을 시도할 수 있고, 또는 [대안]을 고려할 수 있습니다.",
    category: "Offering Options to the Patient (환자에게 선택지 제시하기)",
  },
  {
    term: "You can start with ranitidine and lifestyle changes, or we can discuss other medications if needed.",
    meaning:
      "라니티딘과 생활 습관 변화로 시작할 수 있고, 필요하다면 다른 약물에 대해 논의할 수 있습니다.",
    category: "Offering Options to the Patient (환자에게 선택지 제시하기)",
  },
  {
    term: "You can try a medicated mouthwash or antiseptic gel, depending on what’s more comfortable.",
    meaning:
      "더 편한 것에 따라 약용 구강 세척제나 소독 젤을 시도할 수 있습니다.",
    category: "Offering Options to the Patient (환자에게 선택지 제시하기)",
  },
  {
    term: "We can reduce your pills gradually or focus on lifestyle changes like exercise. What do you prefer?",
    meaning:
      "약을 점진적으로 줄이거나 운동과 같은 생활 습관 변화에 집중할 수 있습니다. 어떤 것을 선호하시나요?",
    category: "Offering Options to the Patient (환자에게 선택지 제시하기)",
  },
  {
    term: "You can reduce training now or consult a physiotherapist for a tailored plan. Which works better?",
    meaning:
      "지금 훈련을 줄이거나 맞춤 계획을 위해 물리치료사와 상담할 수 있습니다. 어떤 것이 더 나은가요?",
    category: "Offering Options to the Patient (환자에게 선택지 제시하기)",
  },
  {
    term: "We can start with a short course of antibiotics or consider a longer low-dose option. Let’s discuss what’s best.",
    meaning:
      "짧은 항생제 코스로 시작하거나 더 긴 저용량 옵션을 고려할 수 있습니다. 최선의 것을 논의합시다.",
    category: "Offering Options to the Patient (환자에게 선택지 제시하기)",
  },
  {
    term: "We’ll need to follow up in [timeframe] to see how you’re doing.",
    meaning: "[기간] 후에 진행 상황을 확인하기 위해 후속 조치가 필요합니다.",
    category: "Explaining Follow-Up Actions (환자에게 후속 조치 설명하기)",
  },
  {
    term: "I’ll arrange for [specific action, e.g., a specialist referral].",
    meaning: "[특정 조치, 예: 전문의 의뢰]를 준비할 것입니다.",
    category: "Explaining Follow-Up Actions (환자에게 후속 조치 설명하기)",
  },
  {
    term: "Let’s review your progress in [timeframe] to make sure everything’s on track.",
    meaning:
      "모든 것이 순조로운지 확인하기 위해 [기간] 후에 진행 상황을 검토합시다.",
    category: "Explaining Follow-Up Actions (환자에게 후속 조치 설명하기)",
  },
  {
    term: "If your symptoms don’t improve, we’ll [next step].",
    meaning: "증상이 개선되지 않으면, [다음 단계]를 진행할 것입니다.",
    category: "Explaining Follow-Up Actions (환자에게 후속 조치 설명하기)",
  },
  {
    term: "Let’s review your symptoms in a few weeks to see how ranitidine is working.",
    meaning:
      "라니티딘이 어떻게 작용하는지 보기 위해 몇 주 후에 증상을 검토합시다.",
    category: "Explaining Follow-Up Actions (환자에게 후속 조치 설명하기)",
  },
  {
    term: "I’ll arrange an ECG and other tests, then we’ll follow up to discuss results.",
    meaning:
      "심전도와 다른 검사들을 준비하고, 결과를 논의하기 위해 후속 조치할 것입니다.",
    category: "Explaining Follow-Up Actions (환자에게 후속 조치 설명하기)",
  },
  {
    term: "I’ll arrange an urgent appointment with a paediatric oncologist for your daughter.",
    meaning: "딸을 위해 소아 종양 전문의와 긴급 예약을 준비할 것입니다.",
    category: "Explaining Follow-Up Actions (환자에게 후속 조치 설명하기)",
  },
  {
    term: "You’ll come back in two weeks to review the wound and get the test results.",
    meaning:
      "2주 후에 상처를 검토하고 검사 결과를 받기 위해 다시 오시면 됩니다.",
    category: "Explaining Follow-Up Actions (환자에게 후속 조치 설명하기)",
  },
  {
    term: "After resting for a few weeks, we’ll follow up to check your knee’s progress.",
    meaning:
      "몇 주 동안 휴식한 후, 무릎 진행 상황을 확인하기 위해 후속 조치할 것입니다.",
    category: "Explaining Follow-Up Actions (환자에게 후속 조치 설명하기)",
  },
  {
    term: "If the pain persists, we’ll follow up and consider an anti-inflammatory drug.",
    meaning: "통증이 지속되면, 후속 조치하고 항염증제를 고려할 것입니다.",
    category: "Explaining Follow-Up Actions (환자에게 후속 조치 설명하기)",
  },
  {
    term: "I need to warn you that [action] could worsen your condition.",
    meaning: "[행동]이 상태를 악화시킬 수 있음을 경고해야 합니다.",
    category: "Warning the Patient About Risks (환자에게 경고하기)",
  },
  {
    term: "If you continue [action], it might lead to [complication].",
    meaning: "[행동]을 계속하면 [합병증]으로 이어질 수 있습니다.",
    category: "Warning the Patient About Risks (환자에게 경고하기)",
  },
  {
    term: "It’s important to avoid [action] to prevent further problems.",
    meaning: "추가 문제를 예방하기 위해 [행동]을 피하는 것이 중요합니다.",
    category: "Warning the Patient About Risks (환자에게 경고하기)",
  },
  {
    term: "Ignoring this could cause [specific risk].",
    meaning: "이를 무시하면 [특정 위험]을 초래할 수 있습니다.",
    category: "Warning the Patient About Risks (환자에게 경고하기)",
  },
  {
    term: "Playing sports this weekend could worsen the tear and delay recovery.",
    meaning:
      "이번 주말 스포츠를 하면 파열이 악화되어 회복이 지연될 수 있습니다.",
    category: "Warning the Patient About Risks (환자에게 경고하기)",
  },
  {
    term: "Stopping the pills suddenly could cause withdrawal symptoms.",
    meaning: "약을 갑자기 중단하면 금단 증상이 생길 수 있습니다.",
    category: "Warning the Patient About Risks (환자에게 경고하기)",
  },
  {
    term: "Continuing to smoke or drink heavily could make your reflux worse.",
    meaning: "흡연이나 과도한 음주를 계속하면 역류가 악화될 수 있습니다.",
    category: "Warning the Patient About Risks (환자에게 경고하기)",
  },
  {
    term: "Ignoring this could increase the risk of a more serious stroke.",
    meaning: "이를 무시하면 더 심각한 뇌졸중 위험이 증가할 수 있습니다.",
    category: "Warning the Patient About Risks (환자에게 경고하기)",
  },
  {
    term: "Continuing intense training could lead to a more serious injury.",
    meaning: "강도 높은 훈련을 계속하면 더 심각한 부상으로 이어질 수 있습니다.",
    category: "Warning the Patient About Risks (환자에게 경고하기)",
  },
  {
    term: "Not managing your blood pressure could increase your risk of heart disease.",
    meaning: "혈압을 관리하지 않으면 심장병 위험이 증가할 수 있습니다.",
    category: "Warning the Patient About Risks (환자에게 경고하기)",
  },
  {
    term: "I understand you’re hesitant, but let me explain why this is important.",
    meaning:
      "주저하시는 것이 이해가 되지만, 왜 이것이 중요한지 설명드리겠습니다.",
    category: "Handling Patient Resistance (환자의 반대 다루기)",
  },
  {
    term: "I hear you, but this approach is the safest for your health.",
    meaning: "말씀 잘 들었습니다만, 이 접근법이 건강에 가장 안전합니다.",
    category: "Handling Patient Resistance (환자의 반대 다루기)",
  },
  {
    term: "I know you’d prefer [patient’s preference], but here’s why we recommend [plan].",
    meaning:
      "[환자의 선호]를 원하시는 것을 알지만, 우리가 [계획]을 추천하는 이유는 다음과 같습니다.",
    category: "Handling Patient Resistance (환자의 반대 다루기)",
  },
  {
    term: "Let’s find a way to make this plan work for you.",
    meaning: "이 계획이 당신에게 효과적이도록 방법을 찾아봅시다.",
    category: "Handling Patient Resistance (환자의 반대 다루기)",
  },
  {
    term: "I know you want to see a specialist, but let’s try ranitidine first to manage your symptoms.",
    meaning:
      "전문의를 만나고 싶으신 것을 알지만, 먼저 라니티딘으로 증상을 관리해 봅시다.",
    category: "Handling Patient Resistance (환자의 반대 다루기)",
  },
  {
    term: "I understand you rely on the pills, but reducing them gradually is safer to avoid dependency.",
    meaning:
      "약에 의존하시는 것을 이해하지만, 의존성을 피하기 위해 점진적으로 줄이는 것이 더 안전합니다.",
    category: "Handling Patient Resistance (환자의 반대 다루기)",
  },
  {
    term: "I know you want to play this weekend, but resting now will help you return to sports sooner.",
    meaning:
      "이번 주말 경기를 하고 싶으신 것을 알지만, 지금 휴식을 취하면 더 빨리 스포츠로 돌아갈 수 있습니다.",
    category: "Handling Patient Resistance (환자의 반대 다루기)",
  },
  {
    term: "I understand you want a quick fix, but antiseptic gel and lifestyle changes are the most effective.",
    meaning:
      "빠른 해결을 원하시는 것을 이해하지만, 소독 젤과 생활 습관 변화가 가장 효과적입니다.",
    category: "Handling Patient Resistance (환자의 반대 다루기)",
  },
  {
    term: "I know you’re busy, but seeing a physiotherapist will help you train safely.",
    meaning:
      "바쁘신 것을 알지만, 물리치료사를 만나면 안전하게 훈련할 수 있습니다.",
    category: "Handling Patient Resistance (환자의 반대 다루기)",
  },
  {
    term: "Let me explain how [condition/treatment] works.",
    meaning: "[상태/치료]가 어떻게 작동하는지 설명드리겠습니다.",
    category: "Educating the Patient (환자에게 교육하기)",
  },
  {
    term: "It’s important to understand that [specific information].",
    meaning: "[특정 정보]를 이해하는 것이 중요합니다.",
    category: "Educating the Patient (환자에게 교육하기)",
  },
  {
    term: "Here’s some information to help you manage your condition.",
    meaning: "상태를 관리하는 데 도움이 되는 몇 가지 정보입니다.",
    category: "Educating the Patient (환자에게 교육하기)",
  },
  {
    term: "Knowing more about [condition] can help you prevent issues.",
    meaning:
      "[상태]에 대해 더 아는 것은 문제를 예방하는 데 도움이 될 수 있습니다.",
    category: "Educating the Patient (환자에게 교육하기)",
  },
  {
    term: "GERD happens when stomach acid flows back into your throat. Avoiding certain foods can help.",
    meaning:
      "GERD는 위산이 목구멍으로 역류할 때 발생합니다. 특정 음식을 피하는 것이 도움이 될 수 있습니다.",
    category: "Educating the Patient (환자에게 교육하기)",
  },
  {
    term: "Double voiding—emptying your bladder twice—can help prevent infections.",
    meaning:
      "이중 배뇨—방광을 두 번 비우는 것—은 감염 예방에 도움이 될 수 있습니다.",
    category: "Educating the Patient (환자에게 교육하기)",
  },
  {
    term: "Stress or diet can trigger ulcers, so managing stress is key to prevention.",
    meaning:
      "스트레스나 식단이 궤양을 유발할 수 있으므로, 스트레스 관리가 예방의 핵심입니다.",
    category: "Educating the Patient (환자에게 교육하기)",
  },
  {
    term: "High blood pressure puts strain on your heart, so lifestyle changes are important.",
    meaning: "고혈압은 심장에 부담을 주므로 생활 습관 변화가 중요합니다.",
    category: "Educating the Patient (환자에게 교육하기)",
  },
  {
    term: "A TIA is a warning sign of a possible stroke, so we need to act to reduce risks.",
    meaning:
      "TIA는 뇌졸중 가능성을 경고하는 신호이므로 위험을 줄이기 위해 조치를 취해야 합니다.",
    category: "Educating the Patient (환자에게 교육하기)",
  },
  {
    term: "Wilms’ tumour is a kidney cancer in children, but it’s often treatable with specialist care.",
    meaning:
      "윌름스 종양은 소아 신장암이지만, 전문 치료로 종종 치료 가능합니다.",
    category: "Educating the Patient (환자에게 교육하기)",
  },
  {
    term: "With the right steps, I’m confident we can improve your condition.",
    meaning: "올바른 조치를 취하면 상태를 개선할 수 있다고 확신합니다.",
    category: "Offering a Positive Outlook (환자에게 긍정적인 전망 제시하기)",
  },
  {
    term: "This is very manageable, and many patients see great results.",
    meaning: "이것은 매우 관리 가능하며, 많은 환자들이 좋은 결과를 봅니다.",
    category: "Offering a Positive Outlook (환자에게 긍정적인 전망 제시하기)",
  },
  {
    term: "We have effective treatments that can help you feel better soon.",
    meaning: "곧 기분이 나아질 수 있도록 효과적인 치료법이 있습니다.",
    category: "Offering a Positive Outlook (환자에게 긍정적인 전망 제시하기)",
  },
  {
    term: "By following this plan, you should see improvement in [timeframe].",
    meaning: "이 계획을 따르면 [기간] 내에 개선을 볼 수 있을 것입니다.",
    category: "Offering a Positive Outlook (환자에게 긍정적인 전망 제시하기)",
  },
  {
    term: "With lifestyle changes and ranitidine, most patients see their reflux symptoms improve significantly.",
    meaning:
      "생활 습관 변화와 라니티딘으로 대부분의 환자들은 역류 증상이 크게 개선됩니다.",
    category: "Offering a Positive Outlook (환자에게 긍정적인 전망 제시하기)",
  },
  {
    term: "By managing your blood pressure, you can reduce risks and stay active.",
    meaning:
      "혈압을 관리하면 위험을 줄이고 활동적인 상태를 유지할 수 있습니다.",
    category: "Offering a Positive Outlook (환자에게 긍정적인 전망 제시하기)",
  },
  {
    term: "These ulcers usually clear up in a few days, and we can help make you more comfortable.",
    meaning: "이 궤양은 보통 며칠 안에 사라지며, 더 편안하게 해줄 수 있습니다.",
    category: "Offering a Positive Outlook (환자에게 긍정적인 전망 제시하기)",
  },
  {
    term: "With the right treatment, we can lower the chance of another episode.",
    meaning: "적절한 치료로 또 다른 에피소드의 가능성을 낮출 수 있습니다.",
    category: "Offering a Positive Outlook (환자에게 긍정적인 전망 제시하기)",
  },
  {
    term: "By reducing the pills and trying new strategies, you’ll likely sleep better naturally.",
    meaning:
      "약을 줄이고 새로운 전략을 시도하면 자연스럽게 더 잘 잘 수 있을 것입니다.",
    category: "Offering a Positive Outlook (환자에게 긍정적인 전망 제시하기)",
  },
  {
    term: "Resting now will help your knee heal, and you’ll be back to sports soon.",
    meaning:
      "지금 휴식을 취하면 무릎이 치유되고 곧 스포츠로 돌아갈 수 있습니다.",
    category: "Offering a Positive Outlook (환자에게 긍정적인 전망 제시하기)",
  },
  {
    term: "With antibiotics and more fluids, your infections should clear up and happen less often.",
    meaning:
      "항생제와 더 많은 수분 섭취로 감염이 사라지고 덜 자주 발생할 것입니다.",
    category: "Offering a Positive Outlook (환자에게 긍정적인 전망 제시하기)",
  },
  {
    term: "A balanced exercise plan can help you get back to training without pain.",
    meaning:
      "균형 잡힌 운동 계획은 통증 없이 훈련으로 돌아갈 수 있도록 도와줍니다.",
    category: "Offering a Positive Outlook (환자에게 긍정적인 전망 제시하기)",
  },
  {
    term: "Wilms’ tumour responds well to treatment, and we’ll ensure the best care for your daughter.",
    meaning:
      "윌름스 종양은 치료에 잘 반응하며, 딸에게 최상의 치료를 보장할 것입니다.",
    category: "Offering a Positive Outlook (환자에게 긍정적인 전망 제시하기)",
  },
  {
    term: "After removal, most patients have no further issues with lumps like this.",
    meaning:
      "제거 후 대부분의 환자들은 이런 덩어리로 더 이상 문제를 겪지 않습니다.",
    category: "Offering a Positive Outlook (환자에게 긍정적인 전망 제시하기)",
  },
  {
    term: "I need to share some important information with you.",
    meaning: "당신과 중요한 정보를 공유해야 합니다.",
    category: "Handling Sensitive Topics (민감한 주제 다루기)",
  },
  {
    term: "This might be difficult to hear, but I’m here to support you.",
    meaning: "듣기 어려울 수 있지만, 제가 지원하기 위해 여기 있습니다.",
    category: "Handling Sensitive Topics (민감한 주제 다루기)",
  },

  {
    term: "Let’s go through this together so you understand what’s happening.",
    meaning: "무슨 일이 일어나고 있는지 이해할 수 있도록 함께 살펴봅시다.",
    category: "Handling Sensitive Topics (민감한 주제 다루기)",
  },
  {
    term: "I know this news is concerning, but we have a plan to move forward.",
    meaning:
      "이 소식이 걱정스럽다는 것을 알지만, 앞으로 나아갈 계획이 있습니다.",
    category: "Handling Sensitive Topics (민감한 주제 다루기)",
  },
  {
    term: "The ultrasound shows your daughter has a kidney tumour, but it’s treatable, and we’ll arrange specialist care.",
    meaning:
      "초음파 결과 딸에게 신장 종양이 있지만 치료 가능하며, 전문 의료를 준비할 것입니다.",
    category: "Handling Sensitive Topics (민감한 주제 다루기)",
  },
  {
    term: "Your symptoms suggest a mini-stroke, which is serious, but we’re doing tests to confirm and prevent issues.",
    meaning:
      "증상이 소규모 뇌졸중을 시사하며, 이는 심각하지만 문제를 확인하고 예방하기 위해 검사를 진행 중입니다.",
    category: "Handling Sensitive Topics (민감한 주제 다루기)",
  },
  {
    term: "I know you’re worried about cancer risks. Let’s discuss how we can manage your reflux to prevent complications.",
    meaning:
      "암 위험에 대해 걱정하시는 것을 압니다. 합병증을 예방하기 위해 역류를 관리하는 방법을 논의합시다.",
    category: "Handling Sensitive Topics (민감한 주제 다루기)",
  },
  {
    term: "Your blood pressure is very high, which is concerning, but we can manage it with the right steps.",
    meaning: "혈압이 매우 높아 걱정스럽지만, 올바른 조치로 관리할 수 있습니다.",
    category: "Handling Sensitive Topics (민감한 주제 다루기)",
  },
  {
    term: "I understand your worry about cancer. The lump is likely benign, and we’ll confirm with tests.",
    meaning:
      "암에 대한 걱정을 이해합니다. 덩어리는 양성일 가능성이 높으며, 검사로 확인할 것입니다.",
    category: "Handling Sensitive Topics (민감한 주제 다루기)",
  },
  {
    term: "I know recurring ulcers are frustrating, but they’re not dangerous, and we can manage them.",
    meaning:
      "재발하는 궤양이 답답하다는 것을 알지만, 위험하지 않으며 관리할 수 있습니다.",
    category: "Handling Sensitive Topics (민감한 주제 다루기)",
  },
  {
    term: "This treatment will take some time to show results, but it’s effective.",
    meaning: "이 치료는 결과를 보이는 데 시간이 걸리지만 효과적입니다.",
    category: "Explaining Time Management (환자에게 시간 관리 설명하기)",
  },
  {
    term: "We’ll need [timeframe] to see how this plan works for you.",
    meaning: "이 계획이 효과가 있는지 확인하기 위해 [기간]이 필요합니다.",
    category: "Explaining Time Management (환자에게 시간 관리 설명하기)",
  },
  {
    term: "Recovery can take a few weeks, so patience is important.",
    meaning: "회복에는 몇 주가 걸릴 수 있으므로 인내가 중요합니다.",
    category: "Explaining Time Management (환자에게 시간 관리 설명하기)",
  },
  {
    term: "It may take [timeframe] to get the full results of the tests.",
    meaning: "검사 결과를 완전히 얻는 데 [기간]이 걸릴 수 있습니다.",
    category: "Explaining Time Management (환자에게 시간 관리 설명하기)",
  },
  {
    term: "It may take a few weeks for ranitidine to fully control your symptoms.",
    meaning: "라니티딘이 증상을 완전히 조절하는 데 몇 주가 걸릴 수 있습니다.",
    category: "Explaining Time Management (환자에게 시간 관리 설명하기)",
  },
  {
    term: "Recovery from a meniscus tear can take several weeks with proper rest.",
    meaning:
      "반월상 연골 파열의 회복은 적절한 휴식으로 몇 주가 걸릴 수 있습니다.",
    category: "Explaining Time Management (환자에게 시간 관리 설명하기)",
  },
  {
    term: "The test results for the lump will be ready in about two weeks.",
    meaning: "덩어리에 대한 검사 결과는 약 2주 후에 준비될 것입니다.",
    category: "Explaining Time Management (환자에게 시간 관리 설명하기)",
  },
  {
    term: "The antibiotics should clear the infection in a few days, but we’ll monitor for recurrence.",
    meaning:
      "항생제는 며칠 안에 감염을 없애줄 것이지만, 재발 여부를 모니터링할 것입니다.",
    category: "Explaining Time Management (환자에게 시간 관리 설명하기)",
  },
  {
    term: "It may take a few weeks to adjust to sleeping without pills.",
    meaning: "약 없이 수면에 적응하는 데 몇 주가 걸릴 수 있습니다.",
    category: "Explaining Time Management (환자에게 시간 관리 설명하기)",
  },
  {
    term: "Reducing training for a few weeks will help your back heal.",
    meaning: "몇 주 동안 훈련을 줄이면 허리가 치유되는 데 도움이 될 것입니다.",
    category: "Explaining Time Management (환자에게 시간 관리 설명하기)",
  },
  {
    term: "You’re doing the right thing by addressing this now.",
    meaning: "지금 이 문제를 해결하려는 것이 올바른 행동입니다.",
    category: "Motivating the Patient (환자에게 동기 부여하기)",
  },
  {
    term: "Taking these steps will make a big difference to your health.",
    meaning: "이 조치들을 취하면 건강에 큰 차이를 만들 것입니다.",
    category: "Motivating the Patient (환자에게 동기 부여하기)",
  },
  {
    term: "I believe you can manage this with a little effort.",
    meaning: "조금만 노력하면 이를 관리할 수 있다고 믿습니다.",
    category: "Motivating the Patient (환자에게 동기 부여하기)",
  },
  {
    term: "Let’s work together to get you feeling better soon.",
    meaning: "곧 기분이 나아지도록 함께 노력합시다.",
    category: "Motivating the Patient (환자에게 동기 부여하기)",
  },
  {
    term: "Cutting down on smoking and alcohol will really help your symptoms improve.",
    meaning: "흡연과 알코올을 줄이면 증상이 정말로 개선될 것입니다.",
    category: "Motivating the Patient (환자에게 동기 부여하기)",
  },
  {
    term: "Making these lifestyle changes now will protect your health for your holiday.",
    meaning:
      "지금 이러한 생활 습관 변화를 하면 휴일 동안 건강을 지킬 수 있습니다.",
    category: "Motivating the Patient (환자에게 동기 부여하기)",
  },
  {
    term: "Managing stress will make a big difference in preventing these ulcers.",
    meaning: "스트레스 관리는 이 궤양을 예방하는 데 큰 차이를 만들 것입니다.",
    category: "Motivating the Patient (환자에게 동기 부여하기)",
  },
  {
    term: "Resting now will get you back to playing basketball stronger.",
    meaning: "지금 휴식을 취하면 더 강하게 농구를 다시 할 수 있습니다.",
    category: "Motivating the Patient (환자에게 동기 부여하기)",
  },
  {
    term: "Drinking more water is a simple step that can really help prevent infections.",
    meaning:
      "물을 더 많이 마시는 것은 감염 예방에 정말 도움이 되는 간단한 단계입니다.",
    category: "Motivating the Patient (환자에게 동기 부여하기)",
  },
  {
    term: "Trying these new strategies will help you sleep better without relying on pills.",
    meaning:
      "이 새로운 전략을 시도하면 약에 의존하지 않고 더 잘 잘 수 있을 것입니다.",
    category: "Motivating the Patient (환자에게 동기 부여하기)",
  },
  {
    term: "Let’s work together to find the best way to manage this.",
    meaning: "이를 관리할 최선의 방법을 함께 찾아봅시다.",
    category: "Emphasizing Collaboration (환자와 협력 강조하기)",
  },
  {
    term: "I’m here to support you, and we’ll figure this out as a team.",
    meaning:
      "제가 당신을 지원하기 위해 여기 있으며, 팀으로 함께 해결할 것입니다.",
    category: "Emphasizing Collaboration (환자와 협력 강조하기)",
  },
  {
    term: "We can make this plan work if we tackle it together.",
    meaning: "함께 노력하면 이 계획을 성공시킬 수 있습니다.",
    category: "Emphasizing Collaboration (환자와 협력 강조하기)",
  },
  {
    term: "Your input is important, so let’s create a plan that suits you.",
    meaning: "당신의 의견이 중요하니, 당신에게 맞는 계획을 세워봅시다.",
    category: "Emphasizing Collaboration (환자와 협력 강조하기)",
  },
  {
    term: "Let’s work together to adjust your diet and lifestyle to control your reflux.",
    meaning:
      "역류를 조절하기 위해 식단과 생활 습관을 조정하는 데 함께 노력합시다.",
    category: "Emphasizing Collaboration (환자와 협력 강조하기)",
  },
  {
    term: "We’ll figure out a way to reduce your pills together that feels manageable.",
    meaning: "관리 가능한 약 감소 방법을 함께 찾아낼 것입니다.",
    category: "Emphasizing Collaboration (환자와 협력 강조하기)",
  },
  {
    term: "Let’s create a recovery plan together to get you back to sports safely.",
    meaning: "안전하게 스포츠로 돌아갈 수 있도록 회복 계획을 함께 세웁시다.",
    category: "Emphasizing Collaboration (환자와 협력 강조하기)",
  },
  {
    term: "We can work as a team to prevent these infections with simple changes.",
    meaning:
      "간단한 변화로 이 감염을 예방하기 위해 팀으로 함께 노력할 수 있습니다.",
    category: "Emphasizing Collaboration (환자와 협력 강조하기)",
  },
  {
    term: "I’m here to support you in finding a training plan that avoids pain.",
    meaning: "통증을 피하는 훈련 계획을 찾는 데 지원하기 위해 여기 있습니다.",
    category: "Emphasizing Collaboration (환자와 협력 강조하기)",
  },
  {
    term: "We’ll work together with specialists to ensure the best care for your daughter.",
    meaning:
      "딸에게 최상의 치료를 보장하기 위해 전문가들과 함께 노력할 것입니다.",
    category: "Emphasizing Collaboration (환자와 협력 강조하기)",
  },
  {
    term: "I’m really glad you came in to address this.",
    meaning: "이 문제를 해결하기 위해 와주셔서 정말 기쁩니다.",
    category: "Praising Patient’s Efforts (환자의 노력 칭찬하기)",
  },
  {
    term: "You’re doing a great job looking after your health.",
    meaning: "건강을 잘 챙기고 계셔서 훌륭합니다.",
    category: "Praising Patient’s Efforts (환자의 노력 칭찬하기)",
  },
  {
    term: "It’s great that you’re taking steps to manage this issue.",
    meaning: "이 문제를 관리하기 위해 조치를 취하는 것이 훌륭합니다.",
    category: "Praising Patient’s Efforts (환자의 노력 칭찬하기)",
  },
  {
    term: "Thank you for being proactive about your condition.",
    meaning: "상태에 대해 적극적으로 대처해 주셔서 감사합니다.",
    category: "Praising Patient’s Efforts (환자의 노력 칭찬하기)",
  },
  {
    term: "It’s great that you’re eating well and staying active—it really helps your health.",
    meaning: "잘 먹고 활동적인 상태를 유지하는 것이 건강에 정말 도움이 됩니다.",
    category: "Praising Patient’s Efforts (환자의 노력 칭찬하기)",
  },
  {
    term: "I’m glad you came in for this check-up before your trip.",
    meaning: "여행 전에 이 검진을 위해 와주셔서 기쁩니다.",
    category: "Praising Patient’s Efforts (환자의 노력 칭찬하기)",
  },
  {
    term: "You’re doing the right thing by seeking help for these ulcers.",
    meaning: "이 궤양에 대해 도움을 요청하는 것이 올바른 행동입니다.",
    category: "Praising Patient’s Efforts (환자의 노력 칭찬하기)",
  },
  {
    term: "It’s great that you came in to address your back pain early.",
    meaning: "허리 통증을 일찍 해결하기 위해 와주셔서 훌륭합니다.",
    category: "Praising Patient’s Efforts (환자의 노력 칭찬하기)",
  },
  {
    term: "Thank you for sharing your symptoms—it helps us find the best plan.",
    meaning:
      "증상을 공유해 주셔서 감사합니다—최선의 계획을 찾는 데 도움이 됩니다.",
    category: "Praising Patient’s Efforts (환자의 노력 칭찬하기)",
  },
  {
    term: "I’m glad you came in to check on this lump—it’s the right step.",
    meaning: "이 덩어리를 확인하기 위해 와주셔서 기쁩니다—올바른 조치입니다.",
    category: "Praising Patient’s Efforts (환자의 노력 칭찬하기)",
  },
  {
    term: "It’s important to know that this will take some time to improve.",
    meaning: "이것이 개선되는 데 시간이 걸린다는 것을 아는 것이 중요합니다.",
    category:
      "Setting Realistic Expectations (환자에게 현실적인 기대 설정하기)",
  },
  {
    term: "We can’t fix this immediately, but we’ll see progress with this plan.",
    meaning: "즉시 고칠 수는 없지만, 이 계획으로 진행 상황을 볼 것입니다.",
    category:
      "Setting Realistic Expectations (환자에게 현실적인 기대 설정하기)",
  },
  {
    term: "This condition can be managed, but it requires consistent effort.",
    meaning: "이 상태는 관리할 수 있지만, 지속적인 노력이 필요합니다.",
    category:
      "Setting Realistic Expectations (환자에게 현실적인 기대 설정하기)",
  },
  {
    term: "Let’s set a realistic goal to improve your symptoms over [timeframe].",
    meaning: "[기간] 동안 증상을 개선하는 현실적인 목표를 세웁시다.",
    category:
      "Setting Realistic Expectations (환자에게 현실적인 기대 설정하기)",
  },
  {
    term: "The ulcers won’t clear up in 24 hours, but they should improve in a few days.",
    meaning: "궤양은 24시간 안에 사라지지 않지만, 며칠 안에 개선될 것입니다.",
    category:
      "Setting Realistic Expectations (환자에게 현실적인 기대 설정하기)",
  },
  {
    term: "You can’t play this weekend, but resting now will help you recover faster.",
    meaning:
      "이번 주말에는 경기를 할 수 없지만, 지금 휴식을 취하면 더 빨리 회복할 수 있습니다.",
    category:
      "Setting Realistic Expectations (환자에게 현실적인 기대 설정하기)",
  },
  {
    term: "It may take time to sleep well without pills, but we’ll get there.",
    meaning: "약 없이 잘 자는 데 시간이 걸릴 수 있지만, 결국 해낼 것입니다.",
    category:
      "Setting Realistic Expectations (환자에게 현실적인 기대 설정하기)",
  },
  {
    term: "Reflux won’t disappear immediately, but lifestyle changes will help over time.",
    meaning:
      "역류는 즉시 사라지지 않지만, 시간이 지나면서 생활 습관 변화가 도움이 될 것입니다.",
    category:
      "Setting Realistic Expectations (환자에게 현실적인 기대 설정하기)",
  },
  {
    term: "We can’t eliminate the pain right away, but a physiotherapist will speed up recovery.",
    meaning:
      "통증을 즉시 없앨 수는 없지만, 물리치료사가 회복을 가속화할 것입니다.",
    category:
      "Setting Realistic Expectations (환자에게 현실적인 기대 설정하기)",
  },
  {
    term: "Infections may recur, but with proper care, we can reduce how often they happen.",
    meaning:
      "감염은 재발할 수 있지만, 적절한 관리로 그 빈도를 줄일 수 있습니다.",
    category:
      "Setting Realistic Expectations (환자에게 현실적인 기대 설정하기)",
  },
];




// 페이지당 항목 수
const itemsPerPage = 30;

// 배열 섞기 함수
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// TTS 초기화
const synth = window.speechSynthesis;
let isSpeaking = false;
let voices = [];

// DOM 요소
const languageSelect = document.getElementById("language-select");
const voiceSelect = document.getElementById("voice-select");
const repeatCountSelect = document.getElementById("repeat-count");
const categorySelect = document.getElementById("category-select");
const hintLengthSelect = document.getElementById("hint-length-select");
const termList = document.getElementById("term-list");

// 카테고리 목록 생성
function populateCategorySelect() {
    const categories = [...new Set(oetPhrases.map(item => item.category))].sort();
    categorySelect.innerHTML = '<option value="">모든 카테고리</option>';
    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

// 언어 목록 생성
function populateLanguageSelect() {
    const languages = [...new Set(voices.map(voice => voice.lang))].sort();
    languageSelect.innerHTML = '<option value="">언어를 선택하세요</option>';
    languages.forEach(lang => {
        const option = document.createElement("option");
        option.value = lang;
        option.textContent = lang;
        languageSelect.appendChild(option);
    });
}

// 화자 목록 생성 및 기본 화자 설정
function populateVoiceSelect(selectedLang) {
    voiceSelect.innerHTML = '<option value="">화자를 선택하세요</option>';
    const filteredVoices = voices.filter(voice => voice.lang === selectedLang);
    filteredVoices.forEach(voice => {
        const option = document.createElement("option");
        option.value = voice.name;
        option.textContent = `${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
    });
    voiceSelect.disabled = filteredVoices.length === 0;
}

// 표현 목록 렌더링 (페이지당 30개, 번호 추가, 정답 보기 버튼, 힌트 보기 버튼)
function renderTermList() {
    termList.innerHTML = "";
    const selectedCategory = categorySelect.value;
    let filteredTerms = selectedCategory
        ? oetPhrases.filter(item => item.category === selectedCategory)
        : oetPhrases;

    if (filteredTerms.length === 0) {
        termList.innerHTML = '<p style="text-align: center; color: #e53e3e;">선택한 카테고리에 해당하는 표현이 없습니다.</p>';
        return;
    }

    const shuffledTerms = shuffleArray([...filteredTerms]);
    const paginatedTerms = shuffledTerms.slice(0, itemsPerPage);
    const hintLength = parseInt(hintLengthSelect.value) || 3;

    paginatedTerms.forEach((item, index) => {
        const termDiv = document.createElement("div");
        termDiv.classList.add("term-item");
        termDiv.title = `${item.term.slice(0, hintLength)}...`; // 동적 힌트 길이 적용

        const termHeader = document.createElement("div");
        termHeader.classList.add("term-header");

        const termNumber = document.createElement("span");
        termNumber.classList.add("term-number");
        termNumber.textContent = `${index + 1}. `;

        const termText = document.createElement("span");
        termText.classList.add("term-text");
        termText.textContent = item.meaning;

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");

        const playButton = document.createElement("button");
        playButton.classList.add("play-button");
        playButton.innerHTML = "<span>재생</span>";
        playButton.addEventListener("click", () => {
            if (!isSpeaking && voiceSelect.value) {
                playButton.disabled = true;
                const repeatCount = parseInt(repeatCountSelect.value) || 1;
                const textToSpeak = item.term;
                speakTerm(textToSpeak, repeatCount);
            } else if (!voiceSelect.value) {
                alert("먼저 언어와 화자를 선택하세요.");
            }
        });

        const hintButton = document.createElement("button");
        hintButton.classList.add("hint-button");
        hintButton.innerHTML = "<span>힌트 보기</span>";
        hintButton.addEventListener("click", () => {
            alert(`힌트: ${item.term.slice(0, hintLength)}...`);
        });

        const revealButton = document.createElement("button");
        revealButton.classList.add("reveal-button");
        revealButton.innerHTML = "<span>정답 보기</span>";
        revealButton.addEventListener("click", () => {
            termText.classList.add("revealed");
            termText.innerHTML = `${item.meaning} <br><span class="english-answer">${item.term}</span> <br><span class="category">${item.category}</span>`;
            revealButton.disabled = true;
        });

        termHeader.appendChild(termNumber);
        termHeader.appendChild(termText);
        buttonContainer.appendChild(playButton);
        buttonContainer.appendChild(hintButton);
        buttonContainer.appendChild(revealButton);
        termDiv.appendChild(termHeader);
        termDiv.appendChild(buttonContainer);
        termList.appendChild(termDiv);
    });

    // 총 문제 수 업데이트
    document.getElementById("term-count").textContent = `총 문제 수: ${filteredTerms.length}`;
}

// 음성 재생 후 버튼 활성화
function speakTerm(text, repeatCount) {
    let currentCount = 0;
    isSpeaking = true;
    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoice = speechSynthesis
        .getVoices()
        .find(voice => voice.name === voiceSelect.value);
    if (selectedVoice) {
        utterance.voice = selectedVoice;
    }
    utterance.lang = languageSelect.value;
    utterance.onend = () => {
        currentCount++;
        if (currentCount < repeatCount) {
            speechSynthesis.speak(utterance);
        } else {
            isSpeaking = false;
            document
                .querySelectorAll(".play-button")
                .forEach(btn => (btn.disabled = false));
        }
    };
    speechSynthesis.speak(utterance);
}

// 음성 로드 및 초기화
function loadVoices() {
    voices = synth.getVoices();
    if (voices.length > 0) {
        populateLanguageSelect();
        populateCategorySelect();

        // 저장된 설정 불러오기
        const savedLang =
            localStorage.getItem("language") ||
            (navigator.platform.includes("Win") ? "en-GB" : "en-AU");
        const savedVoice = localStorage.getItem("voice");
        const savedRepeatCount = localStorage.getItem("repeatCount") || "1";
        const savedCategory = localStorage.getItem("category") || "";
        const savedHintLength = localStorage.getItem("hintLength") || "3";

        repeatCountSelect.value = savedRepeatCount;
        categorySelect.value = savedCategory;
        hintLengthSelect.value = savedHintLength;

        // 언어 설정
        if (voices.find(voice => voice.lang === savedLang)) {
            languageSelect.value = savedLang;
        } else {
            languageSelect.value =
                navigator.platform.includes("Win") &&
                voices.find(voice => voice.lang === "en-GB")
                    ? "en-GB"
                    : voices.find(voice => voice.lang === "en-AU")
                    ? "en-AU"
                    : voices[0]?.lang || "";
        }

        // 화자 설정
        if (languageSelect.value) {
            populateVoiceSelect(languageSelect.value);
            if (
                savedVoice &&
                voices.find(
                    voice =>
                        voice.name === savedVoice && voice.lang === languageSelect.value
                )
            ) {
                voiceSelect.value = savedVoice;
            } else if (
                navigator.platform.includes("Win") &&
                voices.find(
                    voice =>
                        voice.name === "Google UK English Female" && voice.lang === "en-GB"
                )
            ) {
                voiceSelect.value = "Google UK English Female";
            } else {
                const gordonVoice = voices.find(
                    voice =>
                        voice.name.toLowerCase().includes("gordon") &&
                        voice.lang === "en-AU"
                );
                voiceSelect.value = gordonVoice
                    ? gordonVoice.name
                    : voices.find(voice => voice.lang === languageSelect.value)?.name ||
                      "";
            }
        }

        renderTermList();
    }
}

// 음성 비동기 로드 처리
synth.onvoiceschanged = () => {
    loadVoices();
};

// 언어 변경 시 화자 목록 업데이트 및 저장
languageSelect.addEventListener("change", () => {
    const selectedLang = languageSelect.value;
    if (selectedLang) {
        populateVoiceSelect(selectedLang);
        localStorage.setItem("language", selectedLang);
        if (voiceSelect.value) {
            localStorage.setItem("voice", voiceSelect.value);
        }
    } else {
        voiceSelect.innerHTML = '<option value="">먼저 언어를 선택하세요</option>';
        voiceSelect.disabled = true;
    }
    renderTermList();
});

// 화자 변경 시 저장
voiceSelect.addEventListener("change", () => {
    if (voiceSelect.value) {
        localStorage.setItem("voice", voiceSelect.value);
    }
});

// 재생 횟수 변경 시 저장
repeatCountSelect.addEventListener("change", () => {
    localStorage.setItem("repeatCount", repeatCountSelect.value);
});

// 카테고리 변경 시 저장 및 목록 갱신
categorySelect.addEventListener("change", () => {
    localStorage.setItem("category", categorySelect.value);
    renderTermList();
});

// 힌트 길이 변경 시 저장 및 목록 갱신
hintLengthSelect.addEventListener("change", () => {
    localStorage.setItem("hintLength", hintLengthSelect.value);
    renderTermList();
});

// 새로고침 버튼 이벤트
document.getElementById("refresh-button").addEventListener("click", () => {
    renderTermList();
});

// 하단 새로고침 버튼 이벤트
document.getElementById("refresh-button-bottom").addEventListener("click", () => {
    renderTermList();
});

// TTS 지원 여부 확인
if (!synth) {
    const warning = document.createElement("p");
    warning.textContent =
        "이 브라우저는 TTS를 지원하지 않습니다. 최신 브라우저를 사용해 주세요.";
    warning.style.color = "#e53e3e";
    warning.style.textAlign = "center";
    warning.style.marginBottom = "20px";
    document.querySelector(".container").prepend(warning);
    languageSelect.disabled = true;
    voiceSelect.disabled = true;
    repeatCountSelect.disabled = true;
    categorySelect.disabled = true;
    hintLengthSelect.disabled = true;
} else {
    loadVoices();
}