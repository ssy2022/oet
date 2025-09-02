const oetWritingPhrases = [
  {
    term: "I am writing to refer [Patient Name], a [age]-year-old [gender], to your care for further assessment and management.",
    meaning:
      "[환자 이름], [나이]세 [성별] 환자를 추가 평가 및 관리를 위해 귀하에게 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient presents with a history of [condition], which has been ongoing for [duration].",
    meaning: "환자는 [기간] 동안 지속된 [상태]의 병력을 가지고 있습니다.",
    category: "Patient History",
  },
  {
    term: "I would appreciate your expertise in managing this patient’s condition and providing appropriate treatment recommendations.",
    meaning:
      "이 환자의 상태를 관리하고 적절한 치료 권장 사항을 제공하는 데 귀하의 전문성을 높이 평가합니다.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient was initially seen on [date] with complaints of [symptoms].",
    meaning: "환자는 [날짜]에 [증상]을 호소하며 처음 진찰받았습니다.",
    category: "Patient History",
  },
  {
    term: "Please evaluate [Patient Name] for possible [condition] and advise on further management.",
    meaning:
      "[환자 이름]을 [상태] 가능성에 대해 평가하고 추가 관리에 대해 조언해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s condition has not improved despite [treatment/intervention].",
    meaning: "[치료/중재]에도 불구하고 환자의 상태는 호전되지 않았습니다.",
    category: "Patient History",
  },
  {
    term: "I am referring this patient to you for a comprehensive evaluation of [condition].",
    meaning:
      "이 환자를 [상태]에 대한 종합적인 평가를 위해 귀하에게 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient reports experiencing [symptoms] for the past [duration].",
    meaning: "환자는 지난 [기간] 동안 [증상]을 경험했다고 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "Your specialist opinion on the management of this case would be greatly appreciated.",
    meaning: "이 사례의 관리에 대한 귀하의 전문가 의견을 매우 감사히 여깁니다.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient has a past medical history of [condition(s)].",
    meaning: "환자는 [상태(들)]의 과거 병력을 가지고 있습니다.",
    category: "Patient History",
  },
  {
    term: "Please assess the patient for [specific investigation or treatment].",
    meaning: "환자를 [특정 검사 또는 치료]로 평가해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient has been experiencing [symptom] associated with [condition].",
    meaning: "환자는 [상태]와 관련된 [증상]을 겪고 있습니다.",
    category: "Patient History",
  },
  {
    term: "I am writing to request your assistance in managing [Patient Name]’s [condition].",
    meaning:
      "[환자 이름]의 [상태] 관리에 귀하의 도움을 요청하기 위해 이 글을 씁니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient’s symptoms include [list of symptoms].",
    meaning: "환자의 증상에는 [증상 목록]이 포함됩니다.",
    category: "Patient History",
  },
  {
    term: "I would be grateful if you could provide a treatment plan for this patient.",
    meaning: "이 환자에 대한 치료 계획을 제공해 주시면 감사하겠습니다.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient was prescribed [medication/treatment] on [date].",
    meaning: "환자는 [날짜]에 [약물/치료]를 처방받았습니다.",
    category: "Patient History",
  },
  {
    term: "Please advise on the next steps for managing [Patient Name]’s condition.",
    meaning: "[환자 이름]의 상태 관리에 대한 다음 단계를 조언해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient has not responded well to [treatment].",
    meaning: "환자는 [치료]에 잘 반응하지 않았습니다.",
    category: "Patient History",
  },
  {
    term: "I am referring [Patient Name] to your department for [reason].",
    meaning: "[환자 이름]을 [이유]로 귀하의 부서에 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient’s condition appears to be [stable/worsening/improving].",
    meaning: "환자의 상태는 [안정/악화/호전]되는 것으로 보입니다.",
    category: "Patient History",
  },
  {
    term: "Your expertise in [specialty] is highly valued for this case.",
    meaning:
      "이 사례에 대해 [전문 분야]에서의 귀하의 전문성을 높이 평가합니다.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient has a history of [lifestyle factor, e.g., smoking, alcohol use].",
    meaning: "환자는 [생활 습관, 예: 흡연, 음주]의 병력을 가지고 있습니다.",
    category: "Patient History",
  },
  {
    term: "Please conduct [specific test/investigation] to further evaluate the patient’s condition.",
    meaning:
      "환자의 상태를 추가로 평가하기 위해 [특정 검사/조사]를 수행해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s symptoms began after [trigger/event].",
    meaning: "환자의 증상은 [유발 요인/사건] 이후 시작되었습니다.",
    category: "Patient History",
  },
  {
    term: "I am writing to seek your advice regarding [Patient Name]’s [condition].",
    meaning:
      "[환자 이름]의 [상태]에 대한 귀하의 조언을 구하기 위해 이 글을 씁니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient describes the pain as [description, e.g., sharp, dull, intermittent].",
    meaning:
      "환자는 통증을 [설명, 예: 날카롭다, 둔하다, 간헐적]로 묘사했습니다.",
    category: "Patient History",
  },
  {
    term: "I would appreciate your recommendations for further diagnostic tests.",
    meaning: "추가 진단 검사를 위한 귀하의 권장 사항을 감사히 받겠습니다.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient has been compliant with [treatment/medication].",
    meaning: "환자는 [치료/약물]을 잘 따랐습니다.",
    category: "Patient History",
  },
  {
    term: "Please review the patient’s case and suggest appropriate interventions.",
    meaning: "환자의 사례를 검토하고 적절한 중재를 제안해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s current medications include [list of medications].",
    meaning: "환자의 현재 약물은 [약물 목록]을 포함합니다.",
    category: "Patient History",
  },
  {
    term: "I am referring this patient for a second opinion regarding [condition].",
    meaning: "[상태]에 대한 두 번째 의견을 위해 이 환자를 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient reports no improvement in symptoms despite [treatment].",
    meaning: "[치료]에도 불구하고 환자는 증상 호전을 보고하지 않았습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide guidance on the management of [Patient Name]’s [condition].",
    meaning: "[환자 이름]의 [상태] 관리에 대한 지침을 제공해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient has a family history of [condition].",
    meaning: "환자는 [상태]의 가족력을 가지고 있습니다.",
    category: "Patient History",
  },
  {
    term: "I would be grateful for your input on the patient’s treatment options.",
    meaning: "환자의 치료 옵션에 대한 귀하의 의견을 감사히 받겠습니다.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient denies any history of [condition/behavior].",
    meaning: "환자는 [상태/행동]의 병력을 부인했습니다.",
    category: "Patient History",
  },
  {
    term: "I am referring [Patient Name] for urgent evaluation of [condition].",
    meaning: "[환자 이름]을 [상태]의 긴급 평가를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient’s symptoms are exacerbated by [trigger].",
    meaning: "환자의 증상은 [유발 요인]에 의해 악화됩니다.",
    category: "Patient History",
  },
  {
    term: "Please arrange for [specific procedure/test] for this patient.",
    meaning: "이 환자를 위해 [특정 절차/검사]를 마련해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient has been experiencing [symptom] on a [frequency] basis.",
    meaning: "환자는 [빈도]로 [증상]을 겪고 있습니다.",
    category: "Patient History",
  },
  {
    term: "I am seeking your expertise for the management of [condition].",
    meaning: "[상태] 관리에 대한 귀하의 전문성을 구합니다.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s condition was first noted on [date].",
    meaning: "환자의 상태는 [날짜]에 처음 관찰되었습니다.",
    category: "Patient History",
  },
  {
    term: "Please assess whether [treatment/procedure] is appropriate for this patient.",
    meaning: "이 환자에게 [치료/절차]가 적절한지 평가해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient reports relief from [symptom] with [intervention].",
    meaning: "환자는 [중재]로 [증상]이 완화되었다고 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "I am writing to refer [Patient Name] for specialist care regarding [condition].",
    meaning: "[환자 이름]을 [상태]에 대한 전문 치료를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient has a history of allergies to [allergen].",
    meaning:
      "환자는 [알레르기 유발 물질]에 대한 알레르기 병력을 가지고 있습니다.",
    category: "Patient History",
  },
  {
    term: "Your recommendations for ongoing management would be highly appreciated.",
    meaning: "지속적인 관리에 대한 귀하의 권장 사항을 매우 감사히 받겠습니다.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s symptoms have persisted for [duration].",
    meaning: "환자의 증상은 [기간] 동안 지속되었습니다.",
    category: "Patient History",
  },
  {
    term: "Please evaluate the need for [specific intervention] in this case.",
    meaning: "이 사례에서 [특정 중재]의 필요성을 평가해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient was diagnosed with [condition] on [date].",
    meaning: "환자는 [날짜]에 [상태]로 진단받았습니다.",
    category: "Patient History",
  },
  {
    term: "I am referring this patient to you for [specific reason].",
    meaning: "이 환자를 [특정 이유]로 귀하에게 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient’s condition is currently managed with [treatment].",
    meaning: "환자의 상태는 현재 [치료]로 관리되고 있습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide your expert opinion on the best course of action.",
    meaning: "최선의 조치에 대한 귀하의 전문가 의견을 제공해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient has reported [symptom] since [date/event].",
    meaning: "환자는 [날짜/사건] 이후 [증상]을 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "I would appreciate your advice on further investigations for this patient.",
    meaning: "이 환자에 대한 추가 조사에 대한 귀하의 조언을 감사히 받겠습니다.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient has no known drug allergies.",
    meaning: "환자는 알려진 약물 알레르기가 없습니다.",
    category: "Patient History",
  },
  {
    term: "Please consider [Patient Name] for [specific treatment/procedure].",
    meaning: "[환자 이름]을 [특정 치료/절차]로 고려해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s condition has been monitored since [date].",
    meaning: "환자의 상태는 [날짜] 이후 모니터링되었습니다.",
    category: "Patient History",
  },
  {
    term: "I am writing to request your input on [Patient Name]’s ongoing care.",
    meaning:
      "[환자 이름]의 지속적인 치료에 대한 귀하의 의견을 요청하기 위해 이 글을 씁니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient’s symptoms are relieved by [intervention].",
    meaning: "환자의 증상은 [중재]로 완화됩니다.",
    category: "Patient History",
  },
  {
    term: "Please provide a detailed assessment of [Patient Name]’s condition.",
    meaning: "[환자 이름]의 상태에 대한 상세한 평가를 제공해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient has a history of [surgery/procedure].",
    meaning: "환자는 [수술/절차]의 병력을 가지고 있습니다.",
    category: "Patient History",
  },
  {
    term: "Your specialist input is requested for further management of this case.",
    meaning: "이 사례의 추가 관리를 위해 귀하의 전문가 의견을 요청합니다.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s condition has shown [improvement/no change/deterioration].",
    meaning: "환자의 상태는 [호전/변화 없음/악화]를 보였습니다.",
    category: "Patient History",
  },
  {
    term: "I am referring [Patient Name] for evaluation and treatment of [condition].",
    meaning: "[환자 이름]을 [상태]의 평가 및 치료를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient reports [symptom] occurring [frequency].",
    meaning: "환자는 [증상]이 [빈도]로 발생한다고 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "Please advise on the suitability of [treatment] for this patient.",
    meaning: "이 환자에게 [치료]의 적합성에 대해 조언해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient has been advised to [lifestyle change].",
    meaning: "환자는 [생활 습관 변화]를 권고받았습니다.",
    category: "Patient History",
  },
  {
    term: "I would value your recommendations for [Patient Name]’s ongoing care.",
    meaning:
      "[환자 이름]의 지속적인 치료를 위한 귀하의 권장 사항을 소중히 여기겠습니다.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s symptoms have been managed with [medication/treatment].",
    meaning: "환자의 증상은 [약물/치료]로 관리되었습니다.",
    category: "Patient History",
  },
  {
    term: "I am writing to refer this patient for [specific investigation].",
    meaning: "이 환자를 [특정 조사]를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient’s condition is associated with [comorbidity].",
    meaning: "환자의 상태는 [동반 질환]과 관련이 있습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide your recommendations for further management of this case.",
    meaning: "이 사례의 추가 관리에 대한 귀하의 권장 사항을 제공해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient has been experiencing [symptom] intermittently.",
    meaning: "환자는 [증상]을 간헐적으로 겪고 있습니다.",
    category: "Patient History",
  },
  {
    term: "I am seeking your expertise to guide the treatment of [Patient Name].",
    meaning: "[환자 이름]의 치료를 안내하기 위해 귀하의 전문성을 구합니다.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient was admitted to [facility] on [date] for [reason].",
    meaning: "환자는 [날짜]에 [이유]로 [시설]에 입원했습니다.",
    category: "Patient History",
  },
  {
    term: "Please assess [Patient Name] for eligibility for [treatment/procedure].",
    meaning: "[환자 이름]을 [치료/절차]의 적격성으로 평가해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s symptoms are triggered by [factor].",
    meaning: "환자의 증상은 [요인]에 의해 유발됩니다.",
    category: "Patient History",
  },
  {
    term: "I am referring this patient to your clinic for [reason].",
    meaning: "이 환자를 [이유]로 귀하의 진료소에 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient has a history of noncompliance with [treatment].",
    meaning: "환자는 [치료]에 대한 비순응 병력을 가지고 있습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide a treatment plan tailored to this patient’s needs.",
    meaning: "이 환자의 필요에 맞춘 치료 계획을 제공해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient reports worsening of [symptom] over the past [duration].",
    meaning: "환자는 지난 [기간] 동안 [증상]의 악화를 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "I would appreciate your urgent attention to this patient’s condition.",
    meaning: "이 환자의 상태에 대한 귀하의 긴급한 관심을 감사히 받겠습니다.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s condition requires further investigation to confirm [diagnosis].",
    meaning: "환자의 상태는 [진단]을 확인하기 위해 추가 조사가 필요합니다.",
    category: "Patient History",
  },
  {
    term: "I am writing to refer [Patient Name] for [specialty] consultation.",
    meaning: "[환자 이름]을 [전문 분야] 상담을 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient has been experiencing [symptom] with increasing severity.",
    meaning: "환자는 [증상]을 점점 더 심하게 겪고 있습니다.",
    category: "Patient History",
  },
  {
    term: "Please advise on the need for [specific test/treatment] in this case.",
    meaning: "이 사례에서 [특정 검사/치료]의 필요성에 대해 조언해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s condition has been stable since [date].",
    meaning: "환자의 상태는 [날짜] 이후 안정적이었습니다.",
    category: "Patient History",
  },
  {
    term: "I would value your guidance on managing this complex case.",
    meaning: "이 복잡한 사례의 관리에 대한 귀하의 지침을 소중히 여기겠습니다.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient reports a history of [condition] treated with [treatment].",
    meaning: "환자는 [치료]로 치료된 [상태]의 병력을 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "Please assess [Patient Name] for possible surgical intervention.",
    meaning: "[환자 이름]을 수술적 중재 가능성으로 평가해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s symptoms are not alleviated by [treatment].",
    meaning: "환자의 증상은 [치료]로 완화되지 않습니다.",
    category: "Patient History",
  },
  {
    term: "I am referring this patient for your expert evaluation and management.",
    meaning: "이 환자를 귀하의 전문 평가 및 관리로 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient has experienced [symptom] following [event].",
    meaning: "환자는 [사건] 이후 [증상]을 경험했습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide your recommendations for long-term management.",
    meaning: "장기적인 관리에 대한 귀하의 권장 사항을 제공해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient has no significant past medical history.",
    meaning: "환자는 중요한 과거 병력이 없습니다.",
    category: "Patient History",
  },
  {
    term: "I am seeking your advice on the best treatment approach for this patient.",
    meaning: "이 환자의 최선의 치료 접근법에 대한 귀하의 조언을 구합니다.",
    category: "Request for Specialist Input",
  },

  {
    term: "I am writing to discharge [Patient Name], a [age]-year-old [gender], following successful treatment for [condition].",
    meaning:
      "[환자 이름], [나이]세 [성별] 환자를 [상태] 치료 성공 후 퇴원시키기 위해 이 글을 씁니다.",
    category: "Discharge Letter Opening",
  },
  {
    term: "The patient was admitted on [date] with a diagnosis of [condition].",
    meaning: "환자는 [날짜]에 [상태] 진단으로 입원했습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide ongoing management for [Patient Name]’s [condition].",
    meaning: "[환자 이름]의 [상태]에 대한 지속적인 관리를 제공해 주십시오.",
    category: "Request for Ongoing Care",
  },
  {
    term: "The patient underwent [procedure] on [date] with no complications.",
    meaning: "환자는 [날짜]에 [절차]를 받았으며 합병증은 없었습니다.",
    category: "Medical Procedure",
  },
  {
    term: "I am referring [Patient Name] for further investigation of [symptom/condition].",
    meaning: "[환자 이름]을 [증상/상태]의 추가 조사를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient’s symptoms have been partially relieved by [treatment].",
    meaning: "환자의 증상은 [치료]로 부분적으로 완화되었습니다.",
    category: "Patient History",
  },
  {
    term: "Please arrange for an urgent assessment of [Patient Name]’s [condition].",
    meaning: "[환자 이름]의 [상태]에 대한 긴급 평가를 마련해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient has a history of [condition] managed with [treatment].",
    meaning: "환자는 [치료]로 관리된 [상태]의 병력을 가지고 있습니다.",
    category: "Patient History",
  },
  {
    term: "I would appreciate your opinion on the need for [procedure/test].",
    meaning: "[절차/검사]의 필요성에 대한 귀하의 의견을 감사히 받겠습니다.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient presented with [symptoms] on [date].",
    meaning: "환자는 [날짜]에 [증상]을 호소하며 내원했습니다.",
    category: "Patient History",
  },
  {
    term: "The patient is being discharged with instructions to [instructions].",
    meaning: "환자는 [지침]에 대한 지시와 함께 퇴원합니다.",
    category: "Discharge Instructions",
  },
  {
    term: "Please monitor [Patient Name]’s progress and adjust treatment as needed.",
    meaning:
      "[환자 이름]의 진행 상황을 모니터링하고 필요에 따라 치료를 조정해 주십시오.",
    category: "Request for Ongoing Care",
  },
  {
    term: "The patient’s condition was confirmed by [test/investigation] on [date].",
    meaning: "환자의 상태는 [날짜]에 [검사/조사]로 확인되었습니다.",
    category: "Medical Procedure",
  },
  {
    term: "I am referring this patient for specialist management of [condition].",
    meaning: "이 환자를 [상태]의 전문 관리로 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient has experienced [symptom] intermittently for [duration].",
    meaning: "환자는 [기간] 동안 [증상]을 간헐적으로 경험했습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide a detailed treatment plan for [Patient Name].",
    meaning: "[환자 이름]에 대한 상세한 치료 계획을 제공해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s condition is currently stable following [treatment].",
    meaning: "환자의 상태는 [치료] 후 현재 안정적입니다.",
    category: "Patient History",
  },
  {
    term: "The patient is allergic to [allergen].",
    meaning: "환자는 [알레르기 유발 물질]에 알레르기가 있습니다.",
    category: "Patient History",
  },
  {
    term: "I would be grateful for your urgent evaluation of this patient.",
    meaning: "이 환자의 긴급 평가에 대해 감사하겠습니다.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s symptoms were first reported on [date].",
    meaning: "환자의 증상은 [날짜]에 처음 보고되었습니다.",
    category: "Patient History",
  },
  {
    term: "The patient was discharged with [medication/instructions].",
    meaning: "환자는 [약물/지침]과 함께 퇴원했습니다.",
    category: "Discharge Instructions",
  },
  {
    term: "Please assess the need for surgical intervention in this case.",
    meaning: "이 사례에서 수술적 중재의 필요성을 평가해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient has a family history of [condition/disease].",
    meaning: "환자는 [상태/질병]의 가족력을 가지고 있습니다.",
    category: "Patient History",
  },
  {
    term: "The patient’s condition has deteriorated despite [treatment].",
    meaning: "[치료]에도 불구하고 환자의 상태가 악화되었습니다.",
    category: "Patient History",
  },
  {
    term: "I am referring [Patient Name] for a specialist opinion on [condition].",
    meaning: "[환자 이름]을 [상태]에 대한 전문가 의견을 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient has been advised to avoid [activity/substance].",
    meaning: "환자는 [활동/물질]을 피하도록 권고받았습니다.",
    category: "Patient History",
  },
  {
    term: "Please keep me informed of the patient’s progress and outcomes.",
    meaning: "환자의 진행 상황과 결과를 알려주시기 바랍니다.",
    category: "Request for Ongoing Care",
  },
  {
    term: "The patient’s vital signs on [date] were [vital signs].",
    meaning: "[날짜]에 환자의 활력 징후는 [활력 징후]였습니다.",
    category: "Clinical Findings",
  },
  {
    term: "The patient underwent [test] which revealed [result].",
    meaning: "환자는 [검사]를 받았으며 [결과]를 보였습니다.",
    category: "Medical Procedure",
  },
  {
    term: "I would appreciate your guidance on [Patient Name]’s treatment.",
    meaning: "[환자 이름]의 치료에 대한 귀하의 지침을 감사히 받겠습니다.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient is a [occupation] with a history of [condition].",
    meaning: "환자는 [직업]이며 [상태]의 병력을 가지고 있습니다.",
    category: "Patient History",
  },
  {
    term: "The patient’s condition requires urgent specialist attention.",
    meaning: "환자의 상태는 긴급한 전문가의 관심이 필요합니다.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient reports a history of [symptom] triggered by [factor].",
    meaning: "환자는 [요인]에 의해 유발된 [증상]의 병력을 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "The patient was prescribed [medication] for [condition].",
    meaning: "환자는 [상태]로 인해 [약물]을 처방받았습니다.",
    category: "Patient History",
  },
  {
    term: "Please conduct [test/procedure] to confirm the diagnosis.",
    meaning: "진단을 확인하기 위해 [검사/절차]를 수행해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s symptoms have not resolved with [treatment].",
    meaning: "환자의 증상은 [치료]로 해결되지 않았습니다.",
    category: "Patient History",
  },
  {
    term: "I am discharging [Patient Name] to the care of [relative/carer].",
    meaning: "[환자 이름]을 [친척/간병인]의 관리로 퇴원시킵니다.",
    category: "Discharge Letter Opening",
  },
  {
    term: "The patient’s condition is associated with [comorbidity].",
    meaning: "환자의 상태는 [동반 질환]과 관련이 있습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide recommendations for [Patient Name]’s long-term care.",
    meaning: "[환자 이름]의 장기적인 치료에 대한 권장 사항을 제공해 주십시오.",
    category: "Request for Ongoing Care",
  },
  {
    term: "The patient has a history of [procedure/surgery] in [year].",
    meaning: "환자는 [년도]에 [절차/수술]의 병력을 가지고 있습니다.",
    category: "Patient History",
  },
  {
    term: "I am referring this patient for [test/investigation] due to [reason].",
    meaning: "이 환자를 [이유]로 [검사/조사]를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient’s condition has improved following [treatment].",
    meaning: "환자의 상태는 [치료] 후 호전되었습니다.",
    category: "Patient History",
  },
  {
    term: "Please assess [Patient Name] for potential [condition].",
    meaning: "[환자 이름]을 잠재적 [상태]로 평가해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient reports [symptom] with a duration of [duration].",
    meaning: "환자는 [기간] 동안의 [증상]을 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "The patient is to follow [instructions] post-discharge.",
    meaning: "환자는 퇴원 후 [지침]을 따라야 합니다.",
    category: "Discharge Instructions",
  },
  {
    term: "I would value your expertise in diagnosing [Patient Name]’s condition.",
    meaning:
      "[환자 이름]의 상태 진단에 대한 귀하의 전문성을 소중히 여기겠습니다.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient has been non-compliant with [treatment/medication].",
    meaning: "환자는 [치료/약물]에 비순응적이었습니다.",
    category: "Patient History",
  },
  {
    term: "The patient’s condition was assessed on [date] with [findings].",
    meaning: "환자의 상태는 [날짜]에 [소견]으로 평가되었습니다.",
    category: "Clinical Findings",
  },
  {
    term: "Please arrange for [Patient Name] to undergo [procedure/test].",
    meaning: "[환자 이름]이 [절차/검사]를 받도록 마련해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient has a history of [lifestyle factor, e.g., smoking].",
    meaning: "환자는 [생활 습관, 예: 흡연]의 병력을 가지고 있습니다.",
    category: "Patient History",
  },
  {
    term: "The patient was advised to [lifestyle change] to manage [condition].",
    meaning: "환자는 [상태] 관리를 위해 [생활 습관 변화]를 권고받았습니다.",
    category: "Patient History",
  },
  {
    term: "I am referring [Patient Name] for urgent specialist care.",
    meaning: "[환자 이름]을 긴급 전문 치료를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient’s symptoms are consistent with [condition].",
    meaning: "환자의 증상은 [상태]와 일치합니다.",
    category: "Patient History",
  },
  {
    term: "Please provide a comprehensive assessment of [Patient Name]’s condition.",
    meaning: "[환자 이름]의 상태에 대한 종합적인 평가를 제공해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s condition was managed with [medication] on [date].",
    meaning: "환자의 상태는 [날짜]에 [약물]로 관리되었습니다.",
    category: "Patient History",
  },
  {
    term: "I would appreciate your advice on [Patient Name]’s ongoing management.",
    meaning:
      "[환자 이름]의 지속적인 관리에 대한 귀하의 조언을 감사히 받겠습니다.",
    category: "Request for Ongoing Care",
  },
  {
    term: "The patient presented with [symptoms] associated with [trigger].",
    meaning: "환자는 [유발 요인]과 관련된 [증상]을 호소했습니다.",
    category: "Patient History",
  },
  {
    term: "The patient is to resume [activity] after [duration].",
    meaning: "환자는 [기간] 후 [활동]을 재개해야 합니다.",
    category: "Discharge Instructions",
  },
  {
    term: "Please evaluate [Patient Name] for [specific condition/test].",
    meaning: "[환자 이름]을 [특정 상태/검사]로 평가해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient has a history of [condition] treated in [year].",
    meaning: "환자는 [년도]에 치료된 [상태]의 병력을 가지고 있습니다.",
    category: "Patient History",
  },
  {
    term: "The patient’s condition requires further diagnostic investigation.",
    meaning: "환자의 상태는 추가 진단 조사가 필요합니다.",
    category: "Patient History",
  },
  {
    term: "I am referring this patient to your clinic for [reason].",
    meaning: "이 환자를 [이유]로 귀하의 진료소에 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient’s symptoms have worsened over the past [duration].",
    meaning: "환자의 증상은 지난 [기간] 동안 악화되었습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide your recommendations for [Patient Name]’s treatment.",
    meaning: "[환자 이름]의 치료에 대한 귀하의 권장 사항을 제공해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient has been monitored for [condition] since [date].",
    meaning: "환자는 [날짜] 이후 [상태]로 모니터링되었습니다.",
    category: "Patient History",
  },
  {
    term: "The patient is to continue [medication] as prescribed.",
    meaning: "환자는 처방된 대로 [약물]을 계속 복용해야 합니다.",
    category: "Discharge Instructions",
  },
  {
    term: "I would be grateful for your input on [Patient Name]’s condition.",
    meaning: "[환자 이름]의 상태에 대한 귀하의 의견을 감사히 받겠습니다.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s condition was noted to be [stable/worsening] on [date].",
    meaning: "환자의 상태는 [날짜]에 [안정/악화]로 기록되었습니다.",
    category: "Patient History",
  },
  {
    term: "The patient underwent [procedure] with [outcome].",
    meaning: "환자는 [결과]로 [절차]를 받았습니다.",
    category: "Medical Procedure",
  },
  {
    term: "Please assess the suitability of [treatment] for [Patient Name].",
    meaning: "[환자 이름]에게 [치료]의 적합성을 평가해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient has a history of [symptom] since [date/event].",
    meaning: "환자는 [날짜/사건] 이후 [증상]의 병력을 가지고 있습니다.",
    category: "Patient History",
  },
  {
    term: "The patient is to avoid [activity] until [date/condition].",
    meaning: "환자는 [날짜/상태]까지 [활동]을 피해야 합니다.",
    category: "Discharge Instructions",
  },
  {
    term: "I am referring [Patient Name] for further evaluation of [condition].",
    meaning: "[환자 이름]을 [상태]의 추가 평가를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient’s symptoms include [list of symptoms].",
    meaning: "환자의 증상에는 [증상 목록]이 포함됩니다.",
    category: "Patient History",
  },
  {
    term: "Please provide a follow-up plan for [Patient Name].",
    meaning: "[환자 이름]에 대한 후속 계획을 제공해 주십시오.",
    category: "Request for Ongoing Care",
  },
  {
    term: "The patient’s condition was diagnosed as [condition] on [date].",
    meaning: "환자의 상태는 [날짜]에 [상태]로 진단되었습니다.",
    category: "Patient History",
  },
  {
    term: "The patient has been advised to monitor [symptom/condition].",
    meaning: "환자는 [증상/상태]를 모니터링하도록 권고받았습니다.",
    category: "Patient History",
  },
  {
    term: "Please arrange for [test] to rule out [condition].",
    meaning: "[상태]를 배제하기 위해 [검사]를 마련해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s condition has been stable since [treatment].",
    meaning: "환자의 상태는 [치료] 이후 안정적이었습니다.",
    category: "Patient History",
  },
  {
    term: "The patient is to be discharged with [medication/instructions].",
    meaning: "환자는 [약물/지침]과 함께 퇴원해야 합니다.",
    category: "Discharge Instructions",
  },
  {
    term: "I would appreciate your urgent attention to [Patient Name]’s case.",
    meaning:
      "[환자 이름]의 사례에 대한 귀하의 긴급한 관심을 감사히 받겠습니다.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient reports improvement in [symptom] with [treatment].",
    meaning: "환자는 [치료]로 [증상]이 호전되었다고 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "The patient’s condition requires ongoing monitoring for [condition].",
    meaning: "환자의 상태는 [상태]에 대해 지속적인 모니터링이 필요합니다.",
    category: "Patient History",
  },
  {
    term: "Please assess [Patient Name] for [specific treatment/procedure].",
    meaning: "[환자 이름]을 [특정 치료/절차]로 평가해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient has a history of [condition] managed conservatively.",
    meaning: "환자는 보존적으로 관리된 [상태]의 병력을 가지고 있습니다.",
    category: "Patient History",
  },
  {
    term: "The patient was advised to follow up in [duration] for [reason].",
    meaning: "환자는 [이유]로 [기간] 내에 후속 조치를 받도록 권고받았습니다.",
    category: "Discharge Instructions",
  },
  {
    term: "I am referring this patient for [specialty] consultation.",
    meaning: "이 환자를 [전문 분야] 상담을 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient’s symptoms are exacerbated during [activity].",
    meaning: "환자의 증상은 [활동] 중에 악화됩니다.",
    category: "Patient History",
  },
  {
    term: "Please provide your expert opinion on [Patient Name]’s management.",
    meaning: "[환자 이름]의 관리에 대한 귀하의 전문가 의견을 제공해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s condition was first observed on [date].",
    meaning: "환자의 상태는 [날짜]에 처음 관찰되었습니다.",
    category: "Patient History",
  },
  {
    term: "The patient is to maintain a [diet/activity] regimen post-discharge.",
    meaning: "환자는 퇴원 후 [식단/활동] 요법을 유지해야 합니다.",
    category: "Discharge Instructions",
  },
  {
    term: "Please evaluate [Patient Name] for possible complications of [condition].",
    meaning: "[환자 이름]을 [상태]의 잠재적 합병증으로 평가해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient has a history of [symptom] relieved by [treatment].",
    meaning: "환자는 [치료]로 완화된 [증상]의 병력을 가지고 있습니다.",
    category: "Patient History",
  },
  {
    term: "The patient’s condition was assessed as [finding] on [date].",
    meaning: "환자의 상태는 [날짜]에 [소견]으로 평가되었습니다.",
    category: "Clinical Findings",
  },
  {
    term: "Please arrange for ongoing monitoring of [Patient Name]’s [condition].",
    meaning: "[환자 이름]의 [상태]에 대한 지속적인 모니터링을 마련해 주십시오.",
    category: "Request for Ongoing Care",
  },
  {
    term: "The patient reports no significant improvement in [symptom].",
    meaning: "환자는 [증상]의 유의미한 호전을 보고하지 않았습니다.",
    category: "Patient History",
  },
  {
    term: "The patient was advised to resume normal activities after [duration].",
    meaning: "환자는 [기간] 후 정상적인 활동을 재개하도록 권고받았습니다.",
    category: "Discharge Instructions",
  },
  {
    term: "I am referring [Patient Name] for further management of [condition].",
    meaning: "[환자 이름]을 [상태]의 추가 관리를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient’s condition has been managed with [treatment] since [date].",
    meaning: "환자의 상태는 [날짜] 이후 [치료]로 관리되었습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide your recommendations for [Patient Name]’s ongoing treatment.",
    meaning:
      "[환자 이름]의 지속적인 치료에 대한 귀하의 권장 사항을 제공해 주십시오.",
    category: "Request for Ongoing Care",
  },
  {
    term: "The patient’s symptoms are associated with [lifestyle factor].",
    meaning: "환자의 증상은 [생활 습관 요인]과 관련이 있습니다.",
    category: "Patient History",
  },

  {
    term: "On physical examination, the patient appeared [description, e.g., pale, alert].",
    meaning:
      "신체 검사에서 환자는 [설명, 예: 창백함, 경계 상태]로 나타났습니다.",
    category: "Physical Examination",
  },
  {
    term: "The patient’s [body system, e.g., cardiovascular] examination was unremarkable.",
    meaning:
      "환자의 [신체 시스템, 예: 심혈관계] 검사는 특이 소견이 없었습니다.",
    category: "Physical Examination",
  },
  {
    term: "Physical examination revealed [finding, e.g., tenderness in the right iliac fossa].",
    meaning: "신체 검사에서 [소견, 예: 우측 장골와의 압통]이 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The patient’s vital signs were [vital signs, e.g., BP 120/80, pulse 80].",
    meaning:
      "환자의 활력 징후는 [활력 징후, 예: 혈압 120/80, 맥박 80]이었습니다.",
    category: "Physical Examination",
  },
  {
    term: "Examination showed [specific finding, e.g., enlarged tonsils with exudate].",
    meaning:
      "검사에서 [특정 소견, 예: 삼출물이 있는 비대된 편도]가 나타났습니다.",
    category: "Physical Examination",
  },
  {
    term: "Test results from [date] indicated [result, e.g., elevated HbA1c].",
    meaning: "[날짜]의 검사 결과는 [결과, 예: HbA1c 상승]을 나타냈습니다.",
    category: "Test Results",
  },
  {
    term: "The [test, e.g., ultrasound] confirmed [finding, e.g., a 6cm cyst].",
    meaning: "[검사, 예: 초음파]는 [소견, 예: 6cm 낭종]을 확인했습니다.",
    category: "Test Results",
  },
  {
    term: "Laboratory results revealed [result, e.g., elevated white cell count].",
    meaning: "실험실 결과는 [결과, 예: 백혈구 수치 상승]을 보여주었습니다.",
    category: "Test Results",
  },
  {
    term: "The [test, e.g., MRI] showed [finding, e.g., damaged medial cartilage].",
    meaning: "[검사, 예: MRI]는 [소견, 예: 손상된 내측 연골]을 보여주었습니다.",
    category: "Test Results",
  },
  {
    term: "Blood tests indicated [result, e.g., normal renal function].",
    meaning: "혈액 검사 결과는 [결과, 예: 정상 신장 기능]을 나타냈습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was instructed to [instruction, e.g., maintain a low-salt diet].",
    meaning: "환자는 [지침, 예: 저염식 식단 유지]하도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient was advised to monitor [parameter, e.g., blood glucose] daily.",
    meaning:
      "환자는 매일 [매개변수, 예: 혈당]을 모니터링하도록 권고받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient should avoid [activity/substance] for [duration].",
    meaning: "환자는 [기간] 동안 [활동/물질]을 피해야 합니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient was encouraged to increase [activity, e.g., physical activity].",
    meaning: "환자는 [활동, 예: 신체 활동]을 늘리도록 권장받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient was provided with [resource, e.g., educational pamphlets].",
    meaning: "환자는 [자료, 예: 교육 팸플릿]을 제공받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a [occupation] living with [family/living situation].",
    meaning: "환자는 [가족/생활 상황]과 함께 사는 [직업]입니다.",
    category: "Social History",
  },
  {
    term: "The patient has a [lifestyle factor, e.g., history of smoking] for [duration].",
    meaning: "환자는 [기간] 동안 [생활 습관, 예: 흡연 병력]이 있습니다.",
    category: "Social History",
  },
  {
    term: "The patient’s family includes [family members, e.g., spouse and two children].",
    meaning: "환자의 가족은 [가족 구성원, 예: 배우자와 두 자녀]를 포함합니다.",
    category: "Social History",
  },
  {
    term: "The patient reports [social factor, e.g., high work-related stress].",
    meaning: "환자는 [사회적 요인, 예: 높은 업무 스트레스]를 보고했습니다.",
    category: "Social History",
  },
  {
    term: "The patient’s living situation includes [description, e.g., living alone].",
    meaning: "환자의 생활 상황은 [설명, 예: 혼자 거주]를 포함합니다.",
    category: "Social History",
  },
  {
    term: "I am referring [Patient Name], a [age]-year-old [gender], for evaluation of [condition].",
    meaning:
      "[환자 이름], [나이]세 [성별] 환자를 [상태] 평가를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient presented with [symptom] persisting for [duration].",
    meaning: "환자는 [기간] 동안 지속된 [증상]을 호소하며 내원했습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide your expertise in managing [Patient Name]’s [condition].",
    meaning: "[환자 이름]의 [상태] 관리에 귀하의 전문성을 제공해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient is being discharged following treatment for [condition].",
    meaning: "환자는 [상태] 치료 후 퇴원합니다.",
    category: "Discharge Letter Opening",
  },
  {
    term: "The patient is to follow a [specific regimen, e.g., low-fat diet] post-discharge.",
    meaning: "환자는 퇴원 후 [특정 요법, 예: 저지방 식단]을 따라야 합니다.",
    category: "Discharge Instructions",
  },
  {
    term: "On examination, the patient exhibited [finding, e.g., cervical lymphadenopathy].",
    meaning: "검사에서 환자는 [소견, 예: 경부 림프절병증]을 보였습니다.",
    category: "Physical Examination",
  },
  {
    term: "The [test, e.g., ECG] showed [result, e.g., prolonged P-R interval].",
    meaning:
      "[검사, 예: 심전도]는 [결과, 예: 연장된 P-R 간격]을 보여주었습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was advised to attend follow-up in [duration] for [reason].",
    meaning: "환자는 [이유]로 [기간] 내에 후속 조치를 받도록 권고받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a [occupation] with [social factor, e.g., no regular exercise].",
    meaning:
      "환자는 [사회적 요인, 예: 규칙적인 운동 없음]이 있는 [직업]입니다.",
    category: "Social History",
  },
  {
    term: "Please assess [Patient Name] for suitability of [treatment/procedure].",
    meaning: "[환자 이름]을 [치료/절차]의 적합성으로 평가해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s [body part, e.g., abdomen] was tender on palpation.",
    meaning: "환자의 [신체 부위, 예: 복부]는 촉진 시 압통이 있었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The [test, e.g., urine dipstick] revealed [result, e.g., presence of nitrites].",
    meaning:
      "[검사, 예: 소변 검사지]는 [결과, 예: 아질산염 존재]를 보여주었습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was instructed to report any [symptom, e.g., fever] immediately.",
    meaning:
      "환자는 [증상, 예: 발열]이 있을 경우 즉시 보고하도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient has a history of [social factor, e.g., moderate alcohol consumption].",
    meaning: "환자는 [사회적 요인, 예: 적당한 음주]의 병력을 가지고 있습니다.",
    category: "Social History",
  },
  {
    term: "I am writing to refer [Patient Name] for urgent investigation of [condition].",
    meaning: "[환자 이름]을 [상태]의 긴급 조사를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient’s symptoms include [symptom, e.g., fatigue and nausea].",
    meaning: "환자의 증상에는 [증상, 예: 피로와 메스꺼움]이 포함됩니다.",
    category: "Patient History",
  },
  {
    term: "Please provide a management plan for [Patient Name]’s [condition].",
    meaning: "[환자 이름]의 [상태]에 대한 관리 계획을 제공해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient was discharged with instructions to avoid [activity].",
    meaning: "환자는 [활동]을 피하라는 지시와 함께 퇴원했습니다.",
    category: "Discharge Instructions",
  },
  {
    term: "Physical examination indicated [finding, e.g., no joint effusion].",
    meaning: "신체 검사에서 [소견, 예: 관절 삼출 없음]이 나타났습니다.",
    category: "Physical Examination",
  },
  {
    term: "The [test, e.g., FBC] showed [result, e.g., elevated ESR].",
    meaning: "[검사, 예: 전혈구 검사]는 [결과, 예: ESR 상승]을 보여주었습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was advised to continue [medication] as prescribed.",
    meaning: "환자는 처방된 대로 [약물]을 계속 복용하도록 권고받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient lives with [family member, e.g., spouse] and is [occupation].",
    meaning: "환자는 [가족 구성원, 예: 배우자]와 함께 살며 [직업]입니다.",
    category: "Social History",
  },
  {
    term: "Please evaluate [Patient Name] for [specific condition, e.g., ectopic pregnancy].",
    meaning: "[환자 이름]을 [특정 상태, 예: 자궁외 임신]으로 평가해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s [body part, e.g., knee] showed [finding, e.g., swelling].",
    meaning: "환자의 [신체 부위, 예: 무릎]은 [소견, 예: 부종]을 보였습니다.",
    category: "Physical Examination",
  },
  {
    term: "The [test, e.g., CT scan] confirmed [finding, e.g., renal mass].",
    meaning: "[검사, 예: CT 스캔]은 [소견, 예: 신장 종괴]를 확인했습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was advised to return if [symptom, e.g., pain] worsens.",
    meaning:
      "환자는 [증상, 예: 통증]이 악화되면 다시 내원하도록 권고받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient reports [social factor, e.g., living with elderly parents].",
    meaning: "환자는 [사회적 요인, 예: 노부모와 함께 생활]을 보고했습니다.",
    category: "Social History",
  },
  {
    term: "The patient’s [body system, e.g., respiratory] examination was normal.",
    meaning: "환자의 [신체 시스템, 예: 호흡기] 검사는 정상적이었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The [test, e.g., blood test] indicated [result, e.g., high cholesterol].",
    meaning:
      "[검사, 예: 혈액 검사]는 [결과, 예: 높은 콜레스테롤]을 나타냈습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was instructed to take [medication] as prescribed.",
    meaning: "환자는 처방된 대로 [약물]을 복용하도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a [occupation] with no significant social stressors.",
    meaning: "환자는 [직업]이며 유의미한 사회적 스트레스 요인이 없습니다.",
    category: "Social History",
  },
  {
    term: "I am referring [Patient Name] for [specialty, e.g., endocrinology] consultation.",
    meaning: "[환자 이름]을 [전문 분야, 예: 내분비학] 상담을 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient reports [symptom, e.g., chest discomfort] for [duration].",
    meaning: "환자는 [기간] 동안 [증상, 예: 가슴 불편감]을 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide your opinion on [Patient Name]’s [condition].",
    meaning: "[환자 이름]의 [상태]에 대한 귀하의 의견을 제공해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient was discharged with a prescription for [medication].",
    meaning: "환자는 [약물] 처방과 함께 퇴원했습니다.",
    category: "Discharge Instructions",
  },
  {
    term: "Physical examination showed [finding, e.g., no neck stiffness].",
    meaning: "신체 검사에서 [소견, 예: 목 강직 없음]이 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The [test, e.g., X-ray] revealed [result, e.g., no fractures].",
    meaning: "[검사, 예: X-레이]는 [결과, 예: 골절 없음]을 보여주었습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was advised to increase fluid intake for [condition].",
    meaning: "환자는 [상태]를 위해 수분 섭취를 늘리도록 권고받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient has a history of [social factor, e.g., unemployment].",
    meaning: "환자는 [사회적 요인, 예: 실업]의 병력을 가지고 있습니다.",
    category: "Social History",
  },
  {
    term: "Please assess [Patient Name] for [procedure, e.g., colonoscopy].",
    meaning: "[환자 이름]을 [절차, 예: 대장내시경]으로 평가해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s [body part, e.g., groin] showed [finding, e.g., swelling].",
    meaning:
      "환자의 [신체 부위, 예: 사타구니]는 [소견, 예: 부종]을 보였습니다.",
    category: "Physical Examination",
  },
  {
    term: "The [test, e.g., PSA test] showed [result, e.g., elevated levels].",
    meaning: "[검사, 예: PSA 검사]는 [결과, 예: 상승된 수치]를 보여주었습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was instructed to avoid heavy lifting for [duration].",
    meaning: "환자는 [기간] 동안 무거운 물건을 들지 않도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient reports [social factor, e.g., recent relocation].",
    meaning: "환자는 [사회적 요인, 예: 최근 이사]를 보고했습니다.",
    category: "Social History",
  },
  {
    term: "I am referring [Patient Name] for further management of [condition].",
    meaning: "[환자 이름]을 [상태]의 추가 관리를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient has a history of [condition, e.g., hypertension] since [year].",
    meaning: "환자는 [년도] 이후 [상태, 예: 고혈압]의 병력을 가지고 있습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide a treatment plan for [Patient Name]’s ongoing care.",
    meaning: "[환자 이름]의 지속적인 치료를 위한 치료 계획을 제공해 주십시오.",
    category: "Request for Ongoing Care",
  },
  {
    term: "The patient was discharged with instructions to monitor [symptom].",
    meaning: "환자는 [증상]을 모니터링하라는 지시와 함께 퇴원했습니다.",
    category: "Discharge Instructions",
  },
  {
    term: "Physical examination revealed [finding, e.g., a heart murmur].",
    meaning: "신체 검사에서 [소견, 예: 심잡음]이 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The [test, e.g., blood glucose] indicated [result, e.g., poor control].",
    meaning: "[검사, 예: 혈당]은 [결과, 예: 조절 불량]을 나타냈습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was advised to schedule a follow-up in [duration].",
    meaning: "환자는 [기간] 내에 후속 예약을 하도록 권고받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a [occupation] with [social factor, e.g., family support].",
    meaning: "환자는 [사회적 요인, 예: 가족 지원]이 있는 [직업]입니다.",
    category: "Social History",
  },
  {
    term: "Please evaluate [Patient Name] for [specific test, e.g., CT scan].",
    meaning: "[환자 이름]을 [특정 검사, 예: CT 스캔]으로 평가해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s [body system, e.g., neurological] examination was normal.",
    meaning: "환자의 [신체 시스템, 예: 신경계] 검사는 정상적이었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The [test, e.g., midstream urine] showed [result, e.g., red blood cells].",
    meaning: "[검사, 예: 중간 소변]은 [결과, 예: 적혈구]를 보여주었습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was instructed to report [symptom, e.g., bleeding] immediately.",
    meaning: "환자는 [증상, 예: 출혈]을 즉시 보고하도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient has a history of [social factor, e.g., heavy workload].",
    meaning: "환자는 [사회적 요인, 예: 과중한 업무]의 병력을 가지고 있습니다.",
    category: "Social History",
  },
  {
    term: "I am writing to refer [Patient Name] for [procedure, e.g., surgical evaluation].",
    meaning: "[환자 이름]을 [절차, 예: 수술 평가]를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient’s symptoms have persisted despite [treatment].",
    meaning: "환자의 증상은 [치료]에도 불구하고 지속되었습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide your recommendations for [Patient Name]’s management.",
    meaning: "[환자 이름]의 관리에 대한 귀하의 권장 사항을 제공해 주십시오.",
    category: "Request for Ongoing Care",
  },
  {
    term: "The patient was discharged with advice to avoid [substance/activity].",
    meaning: "환자는 [물질/활동]을 피하라는 조언과 함께 퇴원했습니다.",
    category: "Discharge Instructions",
  },
  {
    term: "Physical examination indicated [finding, e.g., mild tenderness].",
    meaning: "신체 검사에서 [소견, 예: 경미한 압통]이 나타났습니다.",
    category: "Physical Examination",
  },
  {
    term: "The [test, e.g., ECG] revealed [result, e.g., normal sinus rhythm].",
    meaning: "[검사, 예: 심전도]는 [결과, 예: 정상 동리듬]을 보여주었습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was advised to maintain a [regimen, e.g., balanced diet].",
    meaning: "환자는 [요법, 예: 균형 잡힌 식단]을 유지하도록 권고받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient reports [social factor, e.g., recent job loss].",
    meaning: "환자는 [사회적 요인, 예: 최근 실직]을 보고했습니다.",
    category: "Social History",
  },
  {
    term: "Please assess [Patient Name] for [condition, e.g., possible malignancy].",
    meaning: "[환자 이름]을 [상태, 예: 악성 가능성]으로 평가해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s [body part, e.g., chest] examination was unremarkable.",
    meaning: "환자의 [신체 부위, 예: 가슴] 검사는 특이 소견이 없었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The [test, e.g., ultrasound] indicated [result, e.g., hydronephrosis].",
    meaning: "[검사, 예: 초음파]는 [결과, 예: 수신증]을 나타냈습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was instructed to avoid [activity, e.g., strenuous exercise].",
    meaning: "환자는 [활동, 예: 격렬한 운동]을 피하도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient has a history of [social factor, e.g., family responsibilities].",
    meaning: "환자는 [사회적 요인, 예: 가족 책임]의 병력을 가지고 있습니다.",
    category: "Social History",
  },
  {
    term: "I am referring [Patient Name] for urgent [specialty] assessment.",
    meaning: "[환자 이름]을 긴급 [전문 분야] 평가를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient’s condition has shown [status, e.g., no improvement] since [date].",
    meaning: "환자의 상태는 [날짜] 이후 [상태, 예: 호전 없음]을 보였습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide your guidance on [Patient Name]’s treatment options.",
    meaning: "[환자 이름]의 치료 옵션에 대한 귀하의 지침을 제공해 주십시오.",
    category: "Request for Ongoing Care",
  },
  {
    term: "The patient was discharged with instructions to resume [activity].",
    meaning: "환자는 [활동]을 재개하라는 지시와 함께 퇴원했습니다.",
    category: "Discharge Instructions",
  },
  {
    term: "Physical examination revealed [finding, e.g., a palpable mass].",
    meaning: "신체 검사에서 [소견, 예: 촉지 가능한 종괴]가 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The [test, e.g., blood test] showed [result, e.g., elevated liver enzymes].",
    meaning:
      "[검사, 예: 혈액 검사]는 [결과, 예: 간 효소 상승]을 보여주었습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was advised to seek immediate care for [symptom].",
    meaning: "환자는 [증상]에 대해 즉시 치료를 받도록 권고받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient reports [social factor, e.g., limited social support].",
    meaning: "환자는 [사회적 요인, 예: 제한된 사회적 지원]을 보고했습니다.",
    category: "Social History",
  },
];

const itemsPerPage = 30;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const synth = window.speechSynthesis;
let isSpeaking = false;
let voices = [];

const languageSelect = document.getElementById("language-select");
const voiceSelect = document.getElementById("voice-select");
const repeatCountSelect = document.getElementById("repeat-count");
const categorySelect = document.getElementById("category-select");
const hintLengthSelect = document.getElementById("hint-length-select");
const termList = document.getElementById("term-list");

function populateCategorySelect() {
  const categories = [
    ...new Set(oetWritingPhrases.map((item) => item.category)),
  ].sort();
  categorySelect.innerHTML = '<option value="">모든 카테고리</option>';
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });
}

function populateLanguageSelect() {
  const languages = [...new Set(voices.map((voice) => voice.lang))].sort();
  languageSelect.innerHTML = '<option value="">언어를 선택하세요</option>';
  languages.forEach((lang) => {
    const option = document.createElement("option");
    option.value = lang;
    option.textContent = lang;
    languageSelect.appendChild(option);
  });
}

function populateVoiceSelect(selectedLang) {
  voiceSelect.innerHTML = '<option value="">화자를 선택하세요</option>';
  const filteredVoices = voices.filter((voice) => voice.lang === selectedLang);
  filteredVoices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });
  voiceSelect.disabled = filteredVoices.length === 0;
}

function renderTermList() {
  termList.innerHTML = "";
  const selectedCategory = categorySelect.value;
  let filteredTerms = selectedCategory
    ? oetWritingPhrases.filter((item) => item.category === selectedCategory)
    : oetWritingPhrases;

  if (filteredTerms.length === 0) {
    termList.innerHTML =
      '<p style="text-align: center; color: #e53e3e;">선택한 카테고리에 해당하는 표현이 없습니다.</p>';
    return;
  }

  const shuffledTerms = shuffleArray([...filteredTerms]);
  const paginatedTerms = shuffledTerms.slice(0, itemsPerPage);
  const hintLength = parseInt(hintLengthSelect.value) || 3;

  paginatedTerms.forEach((item, index) => {
    const termDiv = document.createElement("div");
    termDiv.classList.add("term-item");
    termDiv.title = `${item.term.slice(0, hintLength)}...`;

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

  document.getElementById(
    "term-count"
  ).textContent = `총 문제 수: ${filteredTerms.length}`;
}

function speakTerm(text, repeatCount) {
  let currentCount = 0;
  isSpeaking = true;
  const utterance = new SpeechSynthesisUtterance(text);
  const selectedVoice = speechSynthesis
    .getVoices()
    .find((voice) => voice.name === voiceSelect.value);
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
        .forEach((btn) => (btn.disabled = false));
    }
  };
  speechSynthesis.speak(utterance);
}

function loadVoices() {
  voices = synth.getVoices();
  if (voices.length > 0) {
    populateLanguageSelect();
    populateCategorySelect();

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

    if (voices.find((voice) => voice.lang === savedLang)) {
      languageSelect.value = savedLang;
    } else {
      languageSelect.value =
        navigator.platform.includes("Win") &&
        voices.find((voice) => voice.lang === "en-GB")
          ? "en-GB"
          : voices.find((voice) => voice.lang === "en-AU")
          ? "en-AU"
          : voices[0]?.lang || "";
    }

    if (languageSelect.value) {
      populateVoiceSelect(languageSelect.value);
      if (
        savedVoice &&
        voices.find(
          (voice) =>
            voice.name === savedVoice && voice.lang === languageSelect.value
        )
      ) {
        voiceSelect.value = savedVoice;
      } else if (
        navigator.platform.includes("Win") &&
        voices.find(
          (voice) =>
            voice.name === "Google UK English Female" && voice.lang === "en-GB"
        )
      ) {
        voiceSelect.value = "Google UK English Female";
      } else {
        const gordonVoice = voices.find(
          (voice) =>
            voice.name.toLowerCase().includes("gordon") &&
            voice.lang === "en-AU"
        );
        voiceSelect.value = gordonVoice
          ? gordonVoice.name
          : voices.find((voice) => voice.lang === languageSelect.value)?.name ||
            "";
      }
    }

    renderTermList();
  }
}

synth.onvoiceschanged = () => {
  loadVoices();
};

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

voiceSelect.addEventListener("change", () => {
  if (voiceSelect.value) {
    localStorage.setItem("voice", voiceSelect.value);
  }
});

repeatCountSelect.addEventListener("change", () => {
  localStorage.setItem("repeatCount", repeatCountSelect.value);
});

categorySelect.addEventListener("change", () => {
  localStorage.setItem("category", categorySelect.value);
  renderTermList();
});

hintLengthSelect.addEventListener("change", () => {
  localStorage.setItem("hintLength", hintLengthSelect.value);
  renderTermList();
});

document.getElementById("refresh-button").addEventListener("click", () => {
  renderTermList();
});

document
  .getElementById("refresh-button-bottom")
  .addEventListener("click", () => {
    renderTermList();
  });

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
