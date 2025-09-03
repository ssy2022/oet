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

  {
    term: "On physical examination, the patient appeared pale and fatigued.",
    meaning: "신체 검사에서 환자는 창백하고 피로한 모습으로 나타났습니다.",
    category: "Physical Examination",
  },
  {
    term: "The cardiovascular examination showed no abnormalities.",
    meaning: "심혈관계 검사는 이상 소견을 보이지 않았습니다.",
    category: "Physical Examination",
  },
  {
    term: "Examination revealed tenderness in the right lower quadrant.",
    meaning: "검사에서 우측 하복부에 압통이 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The patient’s vital signs were blood pressure 140/90 and pulse 82.",
    meaning: "환자의 활력 징후는 혈압 140/90, 맥박 82였습니다.",
    category: "Physical Examination",
  },
  {
    term: "Abdominal examination indicated mild distension.",
    meaning: "복부 검사에서 경미한 팽창이 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "Blood tests on 10 January showed elevated liver enzymes.",
    meaning: "1월 10일 혈액 검사에서 간 효소 상승이 나타났습니다.",
    category: "Test Results",
  },
  {
    term: "The ultrasound confirmed a 4cm ovarian cyst.",
    meaning: "초음파 검사에서 4cm 난소 낭종이 확인되었습니다.",
    category: "Test Results",
  },
  {
    term: "The ECG revealed a prolonged QT interval.",
    meaning: "심전도 검사에서 QT 간격 연장이 확인되었습니다.",
    category: "Test Results",
  },
  {
    term: "Urine analysis indicated the presence of red blood cells.",
    meaning: "소변 분석에서 적혈구의 존재가 확인되었습니다.",
    category: "Test Results",
  },
  {
    term: "The MRI showed evidence of a herniated disc in the lumbar spine.",
    meaning: "MRI에서 요추의 추간판 탈출증이 확인되었습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was advised to maintain a low-sodium diet.",
    meaning: "환자는 저염식 식단을 유지하도록 권고받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient was instructed to monitor blood pressure twice daily.",
    meaning: "환자는 하루 두 번 혈압을 모니터링하도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient should avoid strenuous exercise for two weeks.",
    meaning: "환자는 2주 동안 격렬한 운동을 피해야 합니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient was encouraged to walk 30 minutes daily.",
    meaning: "환자는 매일 30분 걷기를 권장받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient received dietary guidelines for diabetes management.",
    meaning: "환자는 당뇨병 관리를 위한 식이 지침을 제공받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a teacher living with her spouse and two children.",
    meaning: "환자는 배우자와 두 자녀와 함께 사는 교사입니다.",
    category: "Social History",
  },
  {
    term: "The patient has smoked 10 cigarettes daily for five years.",
    meaning: "환자는 5년 동안 매일 10개비의 담배를 피웠습니다.",
    category: "Social History",
  },
  {
    term: "The patient lives alone and reports high work-related stress.",
    meaning: "환자는 혼자 살며 높은 업무 스트레스를 보고했습니다.",
    category: "Social History",
  },
  {
    term: "The patient is a retired clerk with no regular exercise routine.",
    meaning: "환자는 정기적인 운동 루틴이 없는 퇴직한 사무원입니다.",
    category: "Social History",
  },
  {
    term: "The patient recently relocated to be near family members.",
    meaning: "환자는 최근 가족과 가깝게 지내기 위해 이사했습니다.",
    category: "Social History",
  },
  {
    term: "I am referring Mrs. Jane Smith for evaluation of chest pain.",
    meaning: "제인 스미스 부인을 흉통 평가를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "Mr. John Brown presented with fatigue persisting for three months.",
    meaning: "존 브라운 씨는 3개월 동안 지속된 피로를 호소하며 내원했습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide your expertise in managing Mrs. Lee’s diabetes.",
    meaning: "리 부인의 당뇨병 관리에 귀하의 전문성을 제공해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "Mrs. Emily Davis was discharged after treatment for pneumonia.",
    meaning: "에밀리 데이비스 부인은 폐렴 치료 후 퇴원했습니다.",
    category: "Discharge Letter Opening",
  },
  {
    term: "The patient was advised to take amoxicillin 500mg three times daily.",
    meaning: "환자는 아목시실린 500mg을 하루 세 번 복용하도록 권고받았습니다.",
    category: "Discharge Instructions",
  },
  {
    term: "On examination, Mr. Ahmed showed enlarged cervical lymph nodes.",
    meaning: "검사에서 아흐메드 씨는 경부 림프절 비대가 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The blood test on 15 February showed a hemoglobin level of 10 g/dL.",
    meaning: "2월 15일 혈액 검사에서 헤모글로빈 수치가 10g/dL로 나타났습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was instructed to report any fever above 38°C immediately.",
    meaning:
      "환자는 38°C 이상의 발열이 있을 경우 즉시 보고하도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a construction worker with a history of heavy lifting.",
    meaning: "환자는 무거운 물건을 드는 병력이 있는 건설 노동자입니다.",
    category: "Social History",
  },
  {
    term: "Please assess Mr. Thomas for suitability of knee surgery.",
    meaning: "토마스 씨를 무릎 수술의 적합성으로 평가해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "Chest examination revealed clear breath sounds bilaterally.",
    meaning: "흉부 검사에서 양측 모두 깨끗한 호흡음이 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The CT scan confirmed a small renal calculus in the right kidney.",
    meaning: "CT 스캔에서 우측 신장에 작은 신장 결석이 확인되었습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was advised to avoid alcohol for one month.",
    meaning: "환자는 한 달 동안 알코올을 피하도록 권고받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a single parent with two young children.",
    meaning: "환자는 두 명의 어린 자녀를 둔 편부모입니다.",
    category: "Social History",
  },
  {
    term: "I am referring Ms. Sarah Wilson for investigation of migraines.",
    meaning: "사라 윌슨 씨를 편두통 조사를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "Mrs. Patel reported abdominal pain for two weeks.",
    meaning: "파텔 부인은 2주 동안 복통을 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide a treatment plan for Mr. Kim’s hypertension.",
    meaning: "김 씨의 고혈압에 대한 치료 계획을 제공해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "Mr. James Carter was discharged after appendectomy.",
    meaning: "제임스 카터 씨는 맹장 절제술 후 퇴원했습니다.",
    category: "Discharge Letter Opening",
  },
  {
    term: "The patient was advised to keep incision sites clean and dry.",
    meaning: "환자는 절개 부위를 깨끗하고 건조하게 유지하도록 권고받았습니다.",
    category: "Discharge Instructions",
  },
  {
    term: "Neurological examination showed no signs of motor deficit.",
    meaning: "신경학적 검사에서 운동 결손의 징후는 없었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The blood test revealed an HbA1c of 9.5%.",
    meaning: "혈액 검사에서 HbA1c가 9.5%로 나타났습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was instructed to follow up in one month.",
    meaning: "환자는 한 달 후 후속 조치를 받도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a nurse with a demanding work schedule.",
    meaning: "환자는 힘든 근무 일정을 가진 간호사입니다.",
    category: "Social History",
  },
  {
    term: "Please evaluate Mrs. Chen for possible thyroid dysfunction.",
    meaning: "첸 부인을 갑상선 기능 장애 가능성으로 평가해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s knee showed swelling and limited range of motion.",
    meaning: "환자의 무릎은 부종과 제한된 운동 범위를 보였습니다.",
    category: "Physical Examination",
  },
  {
    term: "The X-ray indicated no evidence of osteoarthritis.",
    meaning: "X-레이에서 골관절염의 증거는 나타나지 않았습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was advised to increase fluid intake daily.",
    meaning: "환자는 매일 수분 섭취를 늘리도록 권고받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient reports living with elderly parents for support.",
    meaning: "환자는 지원을 위해 노부모와 함께 생활한다고 보고했습니다.",
    category: "Social History",
  },
  {
    term: "I am referring Mr. David Lee for assessment of renal function.",
    meaning: "데이비드 리 씨를 신장 기능 평가를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "Ms. Laura Green reported chest tightness for one month.",
    meaning: "로라 그린 씨는 한 달 동안 가슴 답답함을 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide guidance on Mrs. Khan’s asthma management.",
    meaning: "칸 부인의 천식 관리에 대한 지침을 제공해 주십시오.",
    category: "Request for Ongoing Care",
  },
  {
    term: "The patient was discharged with paracetamol for pain relief.",
    meaning: "환자는 진통을 위해 파라세타몰과 함께 퇴원했습니다.",
    category: "Discharge Instructions",
  },
  {
    term: "Examination showed a heart rate of 76 beats per minute.",
    meaning: "검사에서 심박수가 분당 76회로 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The urine dipstick test showed presence of nitrites.",
    meaning: "소변 검사지 테스트에서 아질산염의 존재가 확인되었습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was advised to avoid driving while on analgesics.",
    meaning: "환자는 진통제를 복용하는 동안 운전을 피하도록 권고받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a student with a history of part-time work.",
    meaning: "환자는 아르바이트 병력이 있는 학생입니다.",
    category: "Social History",
  },
  {
    term: "Please assess Mr. Wong for potential cardiac arrhythmia.",
    meaning: "웡 씨를 심장 부정맥 가능성으로 평가해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s abdomen was soft and non-tender on examination.",
    meaning: "검사에서 환자의 복부는 부드럽고 압통이 없었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The blood test showed a white cell count of 15,000.",
    meaning: "혈액 검사에서 백혈구 수치가 15,000으로 나타났습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was instructed to resume normal diet gradually.",
    meaning: "환자는 정상 식단을 점진적으로 재개하도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient reports a recent increase in work-related stress.",
    meaning: "환자는 최근 업무 관련 스트레스 증가를 보고했습니다.",
    category: "Social History",
  },
  {
    term: "I am referring Ms. Anna Brown for evaluation of joint pain.",
    meaning: "안나 브라운 씨를 관절 통증 평가를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "Mr. Singh reported shortness of breath for two weeks.",
    meaning: "싱 씨는 2주 동안 숨가쁨을 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide a management plan for Mrs. Park’s chronic pain.",
    meaning: "박 부인의 만성 통증에 대한 관리 계획을 제공해 주십시오.",
    category: "Request for Ongoing Care",
  },
  {
    term: "Ms. Claire Adams was discharged after treatment for gastritis.",
    meaning: "클레어 아담스 씨는 위염 치료 후 �퇴원했습니다.",
    category: "Discharge Letter Opening",
  },
  {
    term: "The patient was advised to avoid spicy foods for one month.",
    meaning: "환자는 한 달 동안 매운 음식을 피하도록 권고받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "Examination revealed no signs of peripheral edema.",
    meaning: "검사에서 말초 부종의 징후는 확인되지 않았습니다.",
    category: "Physical Examination",
  },
  {
    term: "The thyroid function test showed elevated TSH levels.",
    meaning: "갑상선 기능 검사에서 TSH 수치 상승이 나타났습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was instructed to report any chest pain immediately.",
    meaning: "환자는 흉통이 있을 경우 즉시 보고하도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a taxi driver with irregular working hours.",
    meaning: "환자는 불규칙한 근무 시간을 가진 택시 운전사입니다.",
    category: "Social History",
  },
  {
    term: "Please evaluate Mr. Evans for possible sleep apnea.",
    meaning: "에반스 씨를 수면 무호흡증 가능성으로 평가해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s respiratory examination was unremarkable.",
    meaning: "환자의 호흡기 검사는 특이 소견이 없었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The blood test indicated a fasting glucose of 14 mmol/L.",
    meaning: "혈액 검사에서 공복 혈당이 14 mmol/L로 나타났습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was advised to attend a diabetes education session.",
    meaning: "환자는 당뇨병 교육 세션에 참석하도록 권고받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient reports a history of caring for elderly relatives.",
    meaning: "환자는 노인 친척을 돌본 병력을 보고했습니다.",
    category: "Social History",
  },
  {
    term: "I am referring Mrs. Taylor for investigation of recurrent headaches.",
    meaning: "테일러 부인을 반복적인 두통 조사를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "Mr. Harris reported weight loss of 5 kg over three months.",
    meaning: "해리스 씨는 3개월 동안 5kg의 체중 감소를 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide recommendations for Mr. Lopez’s COPD management.",
    meaning: "로페즈 씨의 COPD 관리에 대한 권장 사항을 제공해 주십시오.",
    category: "Request for Ongoing Care",
  },
  {
    term: "Ms. Rachel Moore was discharged after treatment for a urinary tract infection.",
    meaning: "레이첼 무어 씨는 요로감염 치료 후 퇴원했습니다.",
    category: "Discharge Letter Opening",
  },
  {
    term: "The patient was advised to complete a course of antibiotics.",
    meaning: "환자는 항생제 치료 과정을 완료하도록 권고받았습니다.",
    category: "Discharge Instructions",
  },
  {
    term: "Examination showed a temperature of 39.2°C and tachycardia.",
    meaning: "검사에서 체온 39.2°C와 빈맥이 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The chest X-ray showed no evidence of consolidation.",
    meaning: "흉부 X-레이에서 폐렴의 증거는 나타나지 않았습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was instructed to rest for one week post-discharge.",
    meaning: "환자는 퇴원 후 일주일 동안 휴식을 취하도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a chef with a history of long working hours.",
    meaning: "환자는 긴 근무 시간을 가진 요리사입니다.",
    category: "Social History",
  },
  {
    term: "Please assess Ms. Nguyen for possible inflammatory bowel disease.",
    meaning: "응우옌 씨를 염증성 장 질환 가능성으로 평가해 주십시오.",
    category: "Request for Specialist Input",
  },

  {
    term: "On examination, the patient exhibited bilateral ankle edema.",
    meaning: "검사에서 환자는 양측 발목 부종을 보였습니다.",
    category: "Physical Examination",
  },
  {
    term: "The respiratory examination revealed reduced breath sounds.",
    meaning: "호흡기 검사에서 호흡음 감소가 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "Abdominal palpation showed a palpable liver edge.",
    meaning: "복부 촉진에서 간 가장자리가 촉지되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The patient’s vital signs included a temperature of 37.8°C.",
    meaning: "환자의 활력 징후는 체온 37.8°C를 포함했습니다.",
    category: "Physical Examination",
  },
  {
    term: "Examination indicated mild tenderness in the lumbar region.",
    meaning: "검사에서 요추 부위에 경미한 압통이 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "Blood tests on 5 March revealed low potassium levels.",
    meaning: "3월 5일 혈액 검사에서 낮은 칼륨 수치가 나타났습니다.",
    category: "Test Results",
  },
  {
    term: "The CT scan showed a 3cm mass in the left lung.",
    meaning: "CT 스캔에서 좌측 폐에 3cm 종괴가 확인되었습니다.",
    category: "Test Results",
  },
  {
    term: "The full blood count indicated mild anemia.",
    meaning: "전혈구 검사에서 경미한 빈혈이 나타났습니다.",
    category: "Test Results",
  },
  {
    term: "The ultrasound revealed gallstones in the gallbladder.",
    meaning: "초음파 검사에서 담낭에 담석이 확인되었습니다.",
    category: "Test Results",
  },
  {
    term: "The thyroid function test showed normal T4 levels.",
    meaning: "갑상선 기능 검사에서 T4 수치가 정상으로 나타났습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was advised to take ibuprofen for joint pain.",
    meaning: "환자는 관절 통증을 위해 이부프로펜을 복용하도록 권고받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient was instructed to monitor blood glucose three times daily.",
    meaning: "환자는 하루 세 번 혈당을 모니터링하도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient should avoid dairy products for one week.",
    meaning: "환자는 일주일 동안 유제품을 피해야 합니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient was encouraged to quit smoking immediately.",
    meaning: "환자는 즉시 금연하도록 권장받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient received instructions on wound care post-surgery.",
    meaning: "환자는 수술 후 상처 관리에 대한 지침을 받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a librarian living with her elderly mother.",
    meaning: "환자는 노모와 함께 사는 사서입니다.",
    category: "Social History",
  },
  {
    term: "The patient has consumed alcohol moderately for ten years.",
    meaning: "환자는 10년 동안 적당히 알코올을 섭취해 왔습니다.",
    category: "Social History",
  },
  {
    term: "The patient is a widower with limited family support.",
    meaning: "환자는 가족 지원이 제한된 홀아비입니다.",
    category: "Social History",
  },
  {
    term: "The patient reports a sedentary lifestyle with minimal exercise.",
    meaning: "환자는 최소한의 운동과 함께 앉아서 생활하는 삶을 보고했습니다.",
    category: "Social History",
  },
  {
    term: "The patient is a factory worker with a history of night shifts.",
    meaning: "환자는 야간 근무 병력이 있는 공장 근로자입니다.",
    category: "Social History",
  },
  {
    term: "I am referring Mr. Robert Jones for evaluation of persistent cough.",
    meaning: "로버트 존스 씨를 지속적인 기침 평가를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "Mrs. Linda White reported dizziness for one month.",
    meaning: "린다 화이트 부인은 한 달 동안 어지럼증을 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide expertise in managing Mr. Park’s heart failure.",
    meaning: "박 씨의 심부전 관리에 귀하의 전문성을 제공해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "Ms. Susan Clark was discharged after treatment for bronchitis.",
    meaning: "수잔 클라크 씨는 기관지염 치료 후 퇴원했습니다.",
    category: "Discharge Letter Opening",
  },
  {
    term: "The patient was advised to use an inhaler twice daily.",
    meaning: "환자는 하루 두 번 흡입기를 사용하도록 권고받았습니다.",
    category: "Discharge Instructions",
  },
  {
    term: "Examination showed a blood pressure of 150/95 mmHg.",
    meaning: "검사에서 혈압이 150/95 mmHg로 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The chest X-ray revealed bilateral pleural effusion.",
    meaning: "흉부 X-레이에서 양측 흉막 삼출이 확인되었습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was instructed to avoid caffeine for two weeks.",
    meaning: "환자는 2주 동안 카페인을 피하도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a sales manager with frequent travel requirements.",
    meaning: "환자는 잦은 출장이 필요한 영업 관리자입니다.",
    category: "Social History",
  },
  {
    term: "Please assess Mrs. Kim for suitability of hip replacement surgery.",
    meaning: "김 부인을 고관절 치환술의 적합성으로 평가해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s shoulder showed reduced range of motion.",
    meaning: "환자의 어깨는 운동 범위 감소를 보였습니다.",
    category: "Physical Examination",
  },
  {
    term: "The blood test indicated a C-reactive protein level of 25 mg/L.",
    meaning: "혈액 검사에서 C-반응성 단백질 수치가 25 mg/L로 나타났습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was advised to elevate the affected leg daily.",
    meaning: "환자는 매일 영향을 받은 다리를 올리도록 권고받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient reports living with a roommate in an apartment.",
    meaning: "환자는 아파트에서 룸메이트와 함께 생활한다고 보고했습니다.",
    category: "Social History",
  },
  {
    term: "I am referring Ms. Emma Brown for investigation of abdominal pain.",
    meaning: "엠마 브라운 씨를 복통 조사를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "Mr. Michael Lee reported nausea for three weeks.",
    meaning: "마이클 리 씨는 3주 동안 메스꺼움을 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide a treatment plan for Mrs. Nguyen’s rheumatoid arthritis.",
    meaning:
      "응우옌 부인의 류마티스 관절염에 대한 치료 계획을 제공해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "Mr. David Wilson was discharged after treatment for cellulitis.",
    meaning: "데이비드 윌슨 씨는 봉와직염 치료 후 퇴원했습니다.",
    category: "Discharge Letter Opening",
  },
  {
    term: "The patient was advised to apply antibiotic cream twice daily.",
    meaning: "환자는 하루 두 번 항생제 크림을 바르도록 권고받았습니다.",
    category: "Discharge Instructions",
  },
  {
    term: "Examination revealed a respiratory rate of 18 breaths per minute.",
    meaning: "검사에서 호흡수가 분당 18회로 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The MRI indicated a partial tear in the rotator cuff.",
    meaning: "MRI에서 회전근개의 부분 파열이 확인되었습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was instructed to avoid heavy lifting for one month.",
    meaning: "환자는 한 달 동안 무거운 물건을 들지 않도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a student with a part-time job at a café.",
    meaning: "환자는 카페에서 아르바이트를 하는 학생입니다.",
    category: "Social History",
  },
  {
    term: "Please evaluate Mr. Patel for possible gastrointestinal bleeding.",
    meaning: "파텔 씨를 위장관 출혈 가능성으로 평가해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s neck examination showed no stiffness.",
    meaning: "환자의 목 검사에서 강직은 확인되지 않았습니다.",
    category: "Physical Examination",
  },
  {
    term: "The blood test showed a fasting glucose level of 7.8 mmol/L.",
    meaning: "혈액 검사에서 공복 혈당 수치가 7.8 mmol/L로 나타났습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was advised to attend a physiotherapy session weekly.",
    meaning: "환자는 매주 물리치료 세션에 참석하도록 권고받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient reports a recent divorce and financial stress.",
    meaning: "환자는 최근 이혼과 재정적 스트레스를 보고했습니다.",
    category: "Social History",
  },
  {
    term: "I am referring Mrs. Alice Green for assessment of chronic fatigue.",
    meaning: "앨리스 그린 부인을 만성 피로 평가를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "Ms. Olivia Smith reported joint stiffness for six weeks.",
    meaning: "올리비아 스미스 씨는 6주 동안 관절 경직을 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide guidance on Mr. Ahmed’s epilepsy management.",
    meaning: "아흐메드 씨의 간질 관리에 대한 지침을 제공해 주십시오.",
    category: "Request for Ongoing Care",
  },
  {
    term: "Mr. Henry Adams was discharged after treatment for a fractured ankle.",
    meaning: "헨리 아담스 씨는 발목 골절 치료 후 퇴원했습니다.",
    category: "Discharge Letter Opening",
  },
  {
    term: "The patient was advised to keep the cast dry for six weeks.",
    meaning: "환자는 6주 동안 깁스를 건조하게 유지하도록 권고받았습니다.",
    category: "Discharge Instructions",
  },
  {
    term: "Examination indicated a pulse rate of 88 beats per minute.",
    meaning: "검사에서 맥박수가 분당 88회로 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The ultrasound showed no evidence of deep vein thrombosis.",
    meaning: "초음파 검사에서 심부정맥 혈전증의 증거는 나타나지 않았습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was instructed to report any swelling immediately.",
    meaning: "환자는 부종이 있을 경우 즉시 보고하도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a caregiver with a history of chronic stress.",
    meaning: "환자는 만성 스트레스 병력이 있는 간병인입니다.",
    category: "Social History",
  },
  {
    term: "Please assess Ms. Taylor for potential endometriosis.",
    meaning: "테일러 씨를 자궁내막증 가능성으로 평가해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s hip examination showed limited mobility.",
    meaning: "환자의 고관절 검사에서 이동성 제한이 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The blood test indicated a low hemoglobin level of 9 g/dL.",
    meaning: "혈액 검사에서 헤모글로빈 수치가 9 g/dL로 낮게 나타났습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was advised to increase dietary fiber intake.",
    meaning: "환자는 식이 섬유 섭취를 늘리도록 권고받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient reports living with a partner and two dogs.",
    meaning: "환자는 파트너와 두 마리의 개와 함께 생활한다고 보고했습니다.",
    category: "Social History",
  },
  {
    term: "I am referring Mr. James Brown for evaluation of hearing loss.",
    meaning: "제임스 브라운 씨를 청력 손실 평가를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "Mrs. Clara Wilson reported recurrent urinary infections for six months.",
    meaning: "클라라 윌슨 부인은 6개월 동안 반복적인 요로감염을 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide recommendations for Ms. Lopez’s migraine management.",
    meaning: "로페즈 씨의 편두통 관리에 대한 권장 사항을 제공해 주십시오.",
    category: "Request for Ongoing Care",
  },
  {
    term: "Ms. Fiona Clark was discharged after treatment for dehydration.",
    meaning: "피오나 클라크 씨는 탈수 치료 후 퇴원했습니다.",
    category: "Discharge Letter Opening",
  },
  {
    term: "The patient was advised to drink 2 liters of water daily.",
    meaning: "환자는 매일 2리터의 물을 마시도록 권고받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "Examination revealed mild wheezing in the lower lobes.",
    meaning: "검사에서 하엽에서 경미한 천명이 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The blood test showed elevated cholesterol levels.",
    meaning: "혈액 검사에서 콜레스테롤 수치 상승이 나타났습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was instructed to avoid prolonged standing.",
    meaning: "환자는 장시간 서 있지 않도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a freelancer with irregular sleep patterns.",
    meaning: "환자는 불규칙한 수면 패턴을 가진 프리랜서입니다.",
    category: "Social History",
  },
  {
    term: "Please evaluate Mr. Singh for possible obstructive sleep apnea.",
    meaning: "싱 씨를 폐쇄성 수면 무호흡증 가능성으로 평가해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s elbow showed no signs of inflammation.",
    meaning: "환자의 팔꿈치에서 염증 징후는 확인되지 않았습니다.",
    category: "Physical Examination",
  },
  {
    term: "The ECG indicated sinus tachycardia.",
    meaning: "심전도에서 동성 빈맥이 확인되었습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was advised to schedule a follow-up in two weeks.",
    meaning: "환자는 2주 후 후속 예약을 하도록 권고받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient reports a history of caregiving for a disabled sibling.",
    meaning: "환자는 장애가 있는 형제자매를 돌본 병력을 보고했습니다.",
    category: "Social History",
  },
  {
    term: "I am referring Mrs. Hannah Lee for assessment of back pain.",
    meaning: "한나 리 부인을 허리 통증 평가를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "Mr. Thomas reported intermittent palpitations for two months.",
    meaning: "토마스 씨는 2개월 동안 간헐적인 심계항진을 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide a plan for Mr. Evans’ chronic kidney disease management.",
    meaning: "에반스 씨의 만성 신부전 관리 계획을 제공해 주십시오.",
    category: "Request for Ongoing Care",
  },
  {
    term: "Ms. Lily Chen was discharged after treatment for a sprained wrist.",
    meaning: "릴리 첸 씨는 손목 염좌 치료 후 퇴원했습니다.",
    category: "Discharge Letter Opening",
  },
  {
    term: "The patient was advised to wear a wrist brace for three weeks.",
    meaning: "환자는 3주 동안 손목 보호대를 착용하도록 권고받았습니다.",
    category: "Discharge Instructions",
  },
  {
    term: "Examination showed a regular heart rhythm with no murmurs.",
    meaning: "검사에서 심잡음 없이 규칙적인 심장 리듬이 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The blood test revealed a vitamin D deficiency.",
    meaning: "혈액 검사에서 비타민 D 결핍이 나타났습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was instructed to take vitamin D supplements daily.",
    meaning: "환자는 매일 비타민 D 보충제를 복용하도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a retiree with a history of gardening hobbies.",
    meaning: "환자는 원예 취미를 가진 퇴직자입니다.",
    category: "Social History",
  },
  {
    term: "Please assess Ms. Carter for potential allergic rhinitis.",
    meaning: "카터 씨를 알레르기성 비염 가능성으로 평가해 주십시오.",
    category: "Request for Specialist Input",
  },




  {
    term: "On examination, the patient showed signs of dehydration.",
    meaning: "검사에서 환자는 탈수 증상을 보였습니다.",
    category: "Physical Examination",
  },
  {
    term: "The neurological examination revealed normal reflexes.",
    meaning: "신경학적 검사에서 정상적인 반사가 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "Abdominal examination indicated a soft, non-tender abdomen.",
    meaning: "복부 검사에서 부드럽고 압통 없는 복부가 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The patient’s vital signs showed a pulse of 90 beats per minute.",
    meaning: "환자의 활력 징후는 맥박이 분당 90회로 나타났습니다.",
    category: "Physical Examination",
  },
  {
    term: "Examination revealed mild tenderness in the left shoulder.",
    meaning: "검사에서 좌측 어깨에 경미한 압통이 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "Blood tests on 12 April showed elevated creatinine levels.",
    meaning: "4월 12일 혈액 검사에서 크레아티닌 수치 상승이 나타났습니다.",
    category: "Test Results",
  },
  {
    term: "The chest CT scan confirmed a pulmonary nodule.",
    meaning: "흉부 CT 스캔에서 폐 결절이 확인되었습니다.",
    category: "Test Results",
  },
  {
    term: "The urine test indicated a urinary tract infection.",
    meaning: "소변 검사에서 요로감염이 나타났습니다.",
    category: "Test Results",
  },
  {
    term: "The ECG showed evidence of atrial fibrillation.",
    meaning: "심전도에서 심방세동의 증거가 확인되었습니다.",
    category: "Test Results",
  },
  {
    term: "The blood test revealed a low platelet count of 120,000.",
    meaning: "혈액 검사에서 혈소판 수치가 120,000으로 낮게 나타났습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was advised to take omeprazole for acid reflux.",
    meaning: "환자는 위산 역류를 위해 오메프라졸을 복용하도록 권고받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient was instructed to check blood pressure weekly.",
    meaning: "환자는 매주 혈압을 확인하도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient should avoid gluten for one month.",
    meaning: "환자는 한 달 동안 글루텐을 피해야 합니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient was encouraged to practice daily meditation.",
    meaning: "환자는 매일 명상을 실천하도록 권장받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient received a booklet on managing hypertension.",
    meaning: "환자는 고혈압 관리에 대한 소책자를 받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a mechanic living with his brother.",
    meaning: "환자는 오빠와 함께 사는 정비공입니다.",
    category: "Social History",
  },
  {
    term: "The patient has a 15-year history of smoking one pack daily.",
    meaning: "환자는 15년 동안 매일 한 갑씩 흡연한 병력이 있습니다.",
    category: "Social History",
  },
  {
    term: "The patient is a single mother with three children.",
    meaning: "환자는 세 자녀를 둔 싱글맘입니다.",
    category: "Social History",
  },
  {
    term: "The patient reports high stress due to financial difficulties.",
    meaning: "환자는 재정적 어려움으로 인해 높은 스트레스를 보고했습니다.",
    category: "Social History",
  },
  {
    term: "The patient is a delivery driver with irregular meal times.",
    meaning: "환자는 불규칙한 식사 시간을 가진 배달 기사입니다.",
    category: "Social History",
  },
  {
    term: "I am referring Mr. Andrew Kim for evaluation of chest discomfort.",
    meaning: "앤드류 김 씨를 가슴 불편감 평가를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "Mrs. Sarah Johnson reported back pain for four weeks.",
    meaning: "사라 존슨 부인은 4주 동안 허리 통증을 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide expertise in managing Ms. Park’s eczema.",
    meaning: "박 씨의 습진 관리에 귀하의 전문성을 제공해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "Mr. Thomas Lee was discharged after treatment for gastroenteritis.",
    meaning: "토마스 리 씨는 위장염 치료 후 퇴원했습니다.",
    category: "Discharge Letter Opening",
  },
  {
    term: "The patient was advised to take oral rehydration salts for three days.",
    meaning: "환자는 3일 동안 경구 수분 보충액을 복용하도록 권고받았습니다.",
    category: "Discharge Instructions",
  },
  {
    term: "Examination showed a respiratory rate of 16 breaths per minute.",
    meaning: "검사에서 호흡수가 분당 16회로 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The ultrasound indicated a 5mm kidney stone in the right ureter.",
    meaning: "초음파 검사에서 우측 요관에 5mm 신장 결석이 확인되었습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was instructed to report any blood in urine immediately.",
    meaning: "환자는 소변에 혈액이 있을 경우 즉시 보고하도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a barista with a history of long standing hours.",
    meaning: "환자는 장시간 서서 일하는 병력이 있는 바리스타입니다.",
    category: "Social History",
  },
  {
    term: "Please assess Mrs. Carter for suitability of cataract surgery.",
    meaning: "카터 부인을 백내장 수술의 적합성으로 평가해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s wrist showed swelling and tenderness.",
    meaning: "환자의 손목은 부종과 압통을 보였습니다.",
    category: "Physical Examination",
  },
  {
    term: "The blood test showed an elevated ESR of 30 mm/hr.",
    meaning: "혈액 검사에서 ESR이 30 mm/hr로 상승된 것으로 나타났습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was advised to apply ice to the affected area daily.",
    meaning: "환자는 매일 영향을 받은 부위에 얼음을 적용하도록 권고받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient reports living alone in a rural area.",
    meaning: "환자는 시골 지역에서 혼자 생활한다고 보고했습니다.",
    category: "Social History",
  },
  {
    term: "I am referring Ms. Emily Wong for investigation of palpitations.",
    meaning: "에밀리 웡 씨를 심계항진 조사를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "Mr. James Park reported fatigue for two months.",
    meaning: "제임스 박 씨는 2개월 동안 피로를 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide a treatment plan for Mr. Chen’s osteoarthritis.",
    meaning: "첸 씨의 골관절염에 대한 치료 계획을 제공해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "Mrs. Laura Brown was discharged after treatment for a migraine.",
    meaning: "로라 브라운 부인은 편두통 치료 후 퇴원했습니다.",
    category: "Discharge Letter Opening",
  },
  {
    term: "The patient was advised to avoid bright lights for one week.",
    meaning: "환자는 일주일 동안 밝은 빛을 피하도록 권고받았습니다.",
    category: "Discharge Instructions",
  },
  {
    term: "Examination revealed no signs of jugular venous distension.",
    meaning: "검사에서 경정맥 팽창의 징후는 확인되지 않았습니다.",
    category: "Physical Examination",
  },
  {
    term: "The blood test indicated a normal thyroid function.",
    meaning: "혈액 검사에서 정상적인 갑상선 기능이 나타났습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was instructed to take paracetamol for fever.",
    meaning: "환자는 발열을 위해 파라세타몰을 복용하도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a chef with a history of irregular meal schedules.",
    meaning: "환자는 불규칙한 식사 일정 병력이 있는 요리사입니다.",
    category: "Social History",
  },
  {
    term: "Please evaluate Mr. Singh for possible carpal tunnel syndrome.",
    meaning: "싱 씨를 수근관 증후군 가능성으로 평가해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s ankle examination showed no instability.",
    meaning: "환자의 발목 검사에서 불안정성은 확인되지 않았습니다.",
    category: "Physical Examination",
  },
  {
    term: "The X-ray revealed a hairline fracture in the radius.",
    meaning: "X-레이에서 요골에 미세 골절이 확인되었습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was advised to use a sling for two weeks.",
    meaning: "환자는 2주 동안 슬링을 사용하도록 권고받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient reports a recent job promotion with added stress.",
    meaning: "환자는 최근 승진으로 인한 추가 스트레스를 보고했습니다.",
    category: "Social History",
  },
  {
    term: "I am referring Mrs. Alice Davis for assessment of chronic cough.",
    meaning: "앨리스 데이비스 부인을 만성 기침 평가를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "Ms. Olivia Kim reported abdominal bloating for three weeks.",
    meaning: "올리비아 김 씨는 3주 동안 복부 팽만감을 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide guidance on Mrs. Lee’s irritable bowel syndrome.",
    meaning: "리 부인의 과민성 대장 증후군에 대한 지침을 제공해 주십시오.",
    category: "Request for Ongoing Care",
  },
  {
    term: "Mr. Henry Wilson was discharged after treatment for tonsillitis.",
    meaning: "헨리 윌슨 씨는 편도염 치료 후 퇴원했습니다.",
    category: "Discharge Letter Opening",
  },
  {
    term: "The patient was advised to gargle with saltwater twice daily.",
    meaning: "환자는 하루 두 번 소금물로 가글하도록 권고받았습니다.",
    category: "Discharge Instructions",
  },
  {
    term: "Examination showed a temperature of 38.5°C and mild tachycardia.",
    meaning: "검사에서 체온 38.5°C와 경미한 빈맥이 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The blood test showed a normal white cell count.",
    meaning: "혈액 검사에서 백혈구 수치가 정상으로 나타났습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was instructed to avoid cold drinks for one week.",
    meaning: "환자는 일주일 동안 차가운 음료를 피하도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a teacher with a history of vocal strain.",
    meaning: "환자는 음성 긴장 병력이 있는 교사입니다.",
    category: "Social History",
  },
  {
    term: "Please assess Ms. Taylor for possible anemia.",
    meaning: "테일러 씨를 빈혈 가능성으로 평가해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s knee examination revealed no effusion.",
    meaning: "환자의 무릎 검사에서 삼출은 확인되지 않았습니다.",
    category: "Physical Examination",
  },
  {
    term: "The ultrasound showed a fatty liver with no masses.",
    meaning: "초음파 검사에서 지방간이 확인되었으며 종괴는 없었습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was advised to reduce alcohol intake significantly.",
    meaning: "환자는 알코올 섭취를 상당히 줄이도록 권고받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient reports living with a spouse and one child.",
    meaning: "환자는 배우자와 한 자녀와 함께 생활한다고 보고했습니다.",
    category: "Social History",
  },
  {
    term: "I am referring Mr. Daniel Brown for evaluation of leg swelling.",
    meaning: "다니엘 브라운 씨를 다리 부종 평가를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "Mrs. Clara Park reported chest pain for one week.",
    meaning: "클라라 박 부인은 일주일 동안 흉통을 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide recommendations for Ms. Wong’s hypothyroidism.",
    meaning: "웡 씨의 갑상선 기능 저하증에 대한 권장 사항을 제공해 주십시오.",
    category: "Request for Ongoing Care",
  },
  {
    term: "Ms. Fiona Adams was discharged after treatment for conjunctivitis.",
    meaning: "피오나 아담스 씨는 결막염 치료 후 퇴원했습니다.",
    category: "Discharge Letter Opening",
  },
  {
    term: "The patient was advised to use antibiotic eye drops for five days.",
    meaning: "환자는 5일 동안 항생제 안약을 사용하도록 권고받았습니다.",
    category: "Discharge Instructions",
  },
  {
    term: "Examination revealed a heart murmur in the mitral area.",
    meaning: "검사에서 승모판 부위에 심잡음이 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The blood test indicated a high LDL cholesterol level.",
    meaning: "혈액 검사에서 높은 LDL 콜레스테롤 수치가 나타났습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was instructed to take statins as prescribed.",
    meaning: "환자는 처방된 대로 스타틴을 복용하도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a retiree with a history of woodworking hobbies.",
    meaning: "환자는 목공 취미를 가진 퇴직자입니다.",
    category: "Social History",
  },
  {
    term: "Please assess Mr. Carter for possible prostate enlargement.",
    meaning: "카터 씨를 전립선 비대 가능성으로 평가해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient’s hip examination showed normal range of motion.",
    meaning: "환자의 고관절 검사에서 정상적인 운동 범위가 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The MRI revealed no abnormalities in the cervical spine.",
    meaning: "MRI에서 경추에 이상 소견이 확인되지 않았습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was advised to perform stretching exercises daily.",
    meaning: "환자는 매일 스트레칭 운동을 수행하도록 권고받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient reports a history of volunteering at a local shelter.",
    meaning: "환자는 지역 보호소에서 자원봉사한 병력을 보고했습니다.",
    category: "Social History",
  },
  {
    term: "I am referring Mrs. Hannah Kim for assessment of skin rash.",
    meaning: "한나 김 부인을 피부 발진 평가를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "Mr. Thomas Lee reported shortness of breath for one month.",
    meaning: "토마스 리 씨는 한 달 동안 숨가쁨을 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide a plan for Ms. Chen’s chronic sinusitis management.",
    meaning: "첸 씨의 만성 부비동염 관리 계획을 제공해 주십시오.",
    category: "Request for Ongoing Care",
  },
  {
    term: "Ms. Lily Park was discharged after treatment for a minor burn.",
    meaning: "릴리 박 씨는 경미한 화상 치료 후 퇴원했습니다.",
    category: "Discharge Letter Opening",
  },
  {
    term: "The patient was advised to apply aloe vera gel to the burn daily.",
    meaning:
      "환자는 매일 화상 부위에 알로에 베라 젤을 바르도록 권고받았습니다.",
    category: "Discharge Instructions",
  },
  {
    term: "Examination showed no signs of peripheral neuropathy.",
    meaning: "검사에서 말초 신경병증의 징후는 확인되지 않았습니다.",
    category: "Physical Examination",
  },
  {
    term: "The blood test revealed a normal electrolyte balance.",
    meaning: "혈액 검사에서 전해질 균형이 정상으로 나타났습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was instructed to avoid sun exposure for two weeks.",
    meaning: "환자는 2주 동안 햇빛 노출을 피하도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a writer with a history of sedentary work hours.",
    meaning: "환자는 앉아서 일하는 시간이 긴 작가입니다.",
    category: "Social History",
  },
  {
    term: "Please assess Mr. Singh for possible glaucoma.",
    meaning: "싱 씨를 녹내장 가능성으로 평가해 주십시오.",
    category: "Request for Specialist Input",
  },

  {
    term: "The patient is allergic to penicillin and sulfa drugs.",
    meaning: "환자는 페니실린과 설파제에 알레르기가 있습니다.",
    category: "Allergies",
  },
  {
    term: "The patient has been taking metformin 500mg daily for diabetes.",
    meaning: "환자는 당뇨병으로 메트포르민 500mg을 매일 복용해 왔습니다.",
    category: "Medication History",
  },
  {
    term: "A follow-up appointment is recommended in three weeks to monitor recovery.",
    meaning: "회복을 모니터링하기 위해 3주 후 후속 예약이 권장됩니다.",
    category: "Follow-Up Recommendations",
  },
  {
    term: "The referral is due to persistent shortness of breath despite treatment.",
    meaning: "치료에도 불구하고 지속적인 숨가쁨으로 인해 의뢰합니다.",
    category: "Reason for Referral",
  },
  {
    term: "On examination, the patient’s skin showed erythematous patches.",
    meaning: "검사에서 환자의 피부에 홍반성 반점이 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The blood test on 20 May revealed elevated triglycerides.",
    meaning: "5월 20일 혈액 검사에서 트리글리세라이드 상승이 나타났습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was advised to take aspirin 75mg daily for heart protection.",
    meaning:
      "환자는 심장 보호를 위해 아스피린 75mg을 매일 복용하도록 권고받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a software engineer with a sedentary lifestyle.",
    meaning: "환자는 앉아서 생활하는 소프트웨어 엔지니어입니다.",
    category: "Social History",
  },
  {
    term: "I am referring Ms. Rachel Lee for evaluation of recurrent fevers.",
    meaning: "레이첼 리 씨를 반복적인 발열 평가를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "Mr. David Kim reported epigastric pain for two months.",
    meaning: "데이비드 김 씨는 2개월 동안 상복부 통증을 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide expertise in managing Mrs. Choi’s atrial fibrillation.",
    meaning: "최 부인의 심방세동 관리에 귀하의 전문성을 제공해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "Ms. Emily Park was discharged after treatment for acute sinusitis.",
    meaning: "에밀리 박 씨는 급성 부비동염 치료 후 퇴원했습니다.",
    category: "Discharge Letter Opening",
  },
  {
    term: "The patient was advised to use a nasal saline spray twice daily.",
    meaning:
      "환자는 하루 두 번 비강 식염수 스프레이를 사용하도록 권고받았습니다.",
    category: "Discharge Instructions",
  },
  {
    term: "Examination revealed a positive Murphy’s sign.",
    meaning: "검사에서 머피 징후가 양성으로 나타났습니다.",
    category: "Physical Examination",
  },
  {
    term: "The ultrasound showed a thickened gallbladder wall.",
    meaning: "초음파 검사에서 담낭 벽이 두꺼워진 것이 확인되었습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was instructed to avoid fatty foods for one month.",
    meaning: "환자는 한 달 동안 기름진 음식을 피하도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a single father with two teenage children.",
    meaning: "환자는 두 명의 십대 자녀를 둔 싱글 대디입니다.",
    category: "Social History",
  },
  {
    term: "The patient has no known drug allergies.",
    meaning: "환자는 알려진 약물 알레르기가 없습니다.",
    category: "Allergies",
  },
  {
    term: "The patient has been on lisinopril 10mg for hypertension since 2023.",
    meaning: "환자는 2023년부터 고혈압으로 리시노프릴 10mg을 복용해 왔습니다.",
    category: "Medication History",
  },
  {
    term: "A follow-up in six weeks is advised to review blood test results.",
    meaning: "혈액 검사 결과를 검토하기 위해 6주 후 후속 조치가 권장됩니다.",
    category: "Follow-Up Recommendations",
  },
  {
    term: "The referral is due to worsening joint pain unresponsive to analgesics.",
    meaning: "진통제에 반응하지 않는 악화된 관절 통증으로 인해 의뢰합니다.",
    category: "Reason for Referral",
  },
  {
    term: "I am referring Mr. James Chen for investigation of weight loss.",
    meaning: "제임스 첸 씨를 체중 감소 조사를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "Mrs. Sarah Kim reported blurred vision for three weeks.",
    meaning: "사라 김 부인은 3주 동안 시야 흐림을 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide a treatment plan for Mr. Lee’s chronic back pain.",
    meaning: "리 씨의 만성 허리 통증에 대한 치료 계획을 제공해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "Mr. Thomas Park was discharged after treatment for a corneal abrasion.",
    meaning: "토마스 박 씨는 각막 찰과상 치료 후 퇴원했습니다.",
    category: "Discharge Letter Opening",
  },
  {
    term: "The patient was advised to avoid rubbing the affected eye.",
    meaning: "환자는 영향을 받은 눈을 비비지 않도록 권고받았습니다.",
    category: "Discharge Instructions",
  },
  {
    term: "Examination showed a blood pressure of 135/85 mmHg.",
    meaning: "검사에서 혈압이 135/85 mmHg로 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The blood test revealed a hemoglobin A1c of 8.2%.",
    meaning: "혈액 검사에서 헤모글로빈 A1c가 8.2%로 나타났습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was instructed to take levothyroxine 50mcg daily.",
    meaning: "환자는 매일 레보티록신 50mcg을 복용하도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a graphic designer with a history of prolonged screen time.",
    meaning: "환자는 장시간 화면 시간을 가진 그래픽 디자이너입니다.",
    category: "Social History",
  },
  {
    term: "The patient is allergic to shellfish and dust mites.",
    meaning: "환자는 조개류와 집먼지 진드기에 알레르기가 있습니다.",
    category: "Allergies",
  },
  {
    term: "The patient has taken atorvastatin 20mg for hyperlipidemia since 2022.",
    meaning:
      "환자는 2022년부터 고지혈증으로 아토르바스타틴 20mg을 복용해 왔습니다.",
    category: "Medication History",
  },
  {
    term: "A follow-up in one month is recommended to assess treatment efficacy.",
    meaning: "치료 효과를 평가하기 위해 한 달 후 후속 조치가 권장됩니다.",
    category: "Follow-Up Recommendations",
  },
  {
    term: "The referral is due to recurrent episodes of vertigo.",
    meaning: "반복적인 어지럼증 에피소드로 인해 의뢰합니다.",
    category: "Reason for Referral",
  },
  {
    term: "I am referring Ms. Clara Wong for assessment of skin lesions.",
    meaning: "클라라 웡 씨를 피부 병변 평가를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "Mr. Henry Lee reported night sweats for one month.",
    meaning: "헨리 리 씨는 한 달 동안 야간 발한을 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide guidance on Ms. Park’s asthma control.",
    meaning: "박 씨의 천식 관리에 대한 지침을 제공해 주십시오.",
    category: "Request for Ongoing Care",
  },
  {
    term: "Mrs. Fiona Chen was discharged after treatment for a sprained ankle.",
    meaning: "피오나 첸 부인은 발목 염좌 치료 후 퇴원했습니다.",
    category: "Discharge Letter Opening",
  },
  {
    term: "The patient was advised to apply a compression bandage daily.",
    meaning: "환자는 매일 압박 붕대를 적용하도록 권고받았습니다.",
    category: "Discharge Instructions",
  },
  {
    term: "Examination revealed mild conjunctival injection in both eyes.",
    meaning: "검사에서 양쪽 눈에 경미한 결막 충혈이 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The X-ray showed no evidence of rib fractures.",
    meaning: "X-레이에서 갈비뼈 골절의 증거는 나타나지 않았습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was instructed to avoid heavy meals before bedtime.",
    meaning: "환자는 취침 전 무거운 식사를 피하도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a nurse with a history of shift work.",
    meaning: "환자는 교대 근무 병력이 있는 간호사입니다.",
    category: "Social History",
  },
  {
    term: "The patient has no reported allergies to medications.",
    meaning: "환자는 약물에 대한 알레르기가 보고되지 않았습니다.",
    category: "Allergies",
  },
  {
    term: "The patient has been on sertraline 50mg for depression since 2024.",
    meaning: "환자는 2024년부터 우울증으로 서트랄린 50mg을 복용해 왔습니다.",
    category: "Medication History",
  },
  {
    term: "A follow-up in two months is advised to monitor thyroid function.",
    meaning: "갑상선 기능을 모니터링하기 위해 2개월 후 후속 조치가 권장됩니다.",
    category: "Follow-Up Recommendations",
  },
  {
    term: "The referral is due to persistent fatigue despite normal blood tests.",
    meaning: "정상 혈액 검사에도 불구하고 지속적인 피로로 인해 의뢰합니다.",
    category: "Reason for Referral",
  },
  {
    term: "Please assess Mr. Andrew Kim for possible sleep apnea.",
    meaning: "앤드류 김 씨를 수면 무호흡증 가능성으로 평가해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "Examination showed no signs of abdominal guarding.",
    meaning: "검사에서 복부 방어 징후는 확인되지 않았습니다.",
    category: "Physical Examination",
  },
  {
    term: "The blood test indicated a low vitamin B12 level.",
    meaning: "혈액 검사에서 비타민 B12 수치가 낮게 나타났습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was advised to take vitamin B12 supplements weekly.",
    meaning: "환자는 매주 비타민 B12 보충제를 복용하도록 권고받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a taxi driver with a history of irregular sleep.",
    meaning: "환자는 불규칙한 수면 병력이 있는 택시 운전사입니다.",
    category: "Social History",
  },
  {
    term: "I am referring Mrs. Sarah Lee for evaluation of chronic headaches.",
    meaning: "사라 리 부인을 만성 두통 평가를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "Ms. Olivia Park reported difficulty swallowing for two weeks.",
    meaning: "올리비아 박 씨는 2주 동안 삼킴 곤란을 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide a plan for Mr. Chen’s diabetic foot care.",
    meaning: "첸 씨의 당뇨병성 족부 관리 계획을 제공해 주십시오.",
    category: "Request for Ongoing Care",
  },
  {
    term: "Mr. James Wong was discharged after treatment for a skin infection.",
    meaning: "제임스 웡 씨는 피부 감염 치료 후 퇴원했습니다.",
    category: "Discharge Letter Opening",
  },
  {
    term: "The patient was advised to apply mupirocin ointment twice daily.",
    meaning: "환자는 하루 두 번 무피로신 연고를 바르도록 권고받았습니다.",
    category: "Discharge Instructions",
  },
  {
    term: "Examination revealed a positive straight leg raise test.",
    meaning: "검사에서 직각 다리 들어 올리기 테스트가 양성으로 나타났습니다.",
    category: "Physical Examination",
  },
  {
    term: "The MRI showed a bulging disc at L4-L5.",
    meaning: "MRI에서 L4-L5에 디스크 돌출이 확인되었습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was instructed to perform back exercises daily.",
    meaning: "환자는 매일 허리 운동을 수행하도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a retiree with a history of regular swimming.",
    meaning: "환자는 정기적으로 수영하는 병력이 있는 퇴직자입니다.",
    category: "Social History",
  },
  {
    term: "The patient is allergic to latex and certain adhesives.",
    meaning: "환자는 라텍스와 특정 접착제에 알레르기가 있습니다.",
    category: "Allergies",
  },
  {
    term: "The patient has been taking amlodipine 5mg for hypertension since 2021.",
    meaning: "환자는 2021년부터 고혈압으로 암로디핀 5mg을 복용해 왔습니다.",
    category: "Medication History",
  },
  {
    term: "A follow-up in four weeks is recommended to review cholesterol levels.",
    meaning: "콜레스테롤 수치를 검토하기 위해 4주 후 후속 조치가 권장됩니다.",
    category: "Follow-Up Recommendations",
  },
  {
    term: "The referral is due to recurrent chest infections over six months.",
    meaning: "6개월 동안 반복적인 흉부 감염으로 인해 의뢰합니다.",
    category: "Reason for Referral",
  },
  {
    term: "Please assess Ms. Clara Kim for possible celiac disease.",
    meaning: "클라라 김 씨를 셀리악병 가능성으로 평가해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "Examination showed no evidence of peripheral cyanosis.",
    meaning: "검사에서 말초 청색증의 증거는 확인되지 않았습니다.",
    category: "Physical Examination",
  },
  {
    term: "The blood test revealed a normal liver function profile.",
    meaning: "혈액 검사에서 간 기능 프로필이 정상으로 나타났습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was advised to avoid processed sugars for one month.",
    meaning: "환자는 한 달 동안 가공 설탕을 피하도록 권고받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a student with a history of competitive sports.",
    meaning: "환자는 경쟁 스포츠 병력이 있는 학생입니다.",
    category: "Social History",
  },
  {
    term: "I am referring Mr. Henry Park for evaluation of hearing difficulties.",
    meaning: "헨리 박 씨를 청력 장애 평가를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "Mrs. Fiona Lee reported leg cramps for three months.",
    meaning: "피오나 리 부인은 3개월 동안 다리 경련을 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide recommendations for Ms. Wong’s allergic rhinitis.",
    meaning: "웡 씨의 알레르기성 비염에 대한 권장 사항을 제공해 주십시오.",
    category: "Request for Ongoing Care",
  },
  {
    term: "Ms. Lily Kim was discharged after treatment for a minor concussion.",
    meaning: "릴리 김 씨는 경미한 뇌진탕 치료 후 퇴원했습니다.",
    category: "Discharge Letter Opening",
  },
  {
    term: "The patient was advised to avoid physical exertion for two weeks.",
    meaning: "환자는 2주 동안 신체적 노력을 피하도록 권고받았습니다.",
    category: "Discharge Instructions",
  },
  {
    term: "Examination revealed a normal fundoscopic examination.",
    meaning: "검사에서 안저 검사가 정상으로 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The blood test showed an elevated fasting glucose of 8.5 mmol/L.",
    meaning:
      "혈액 검사에서 공복 혈당이 8.5 mmol/L로 상승된 것으로 나타났습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was instructed to monitor symptoms of hypoglycemia.",
    meaning: "환자는 저혈당 증상을 모니터링하도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a musician with a history of irregular sleep patterns.",
    meaning: "환자는 불규칙한 수면 패턴 병력이 있는 음악가입니다.",
    category: "Social History",
  },
  {
    term: "The patient has a history of seasonal allergies to pollen.",
    meaning: "환자는 꽃가루에 대한 계절성 알레르기 병력이 있습니다.",
    category: "Allergies",
  },
  {
    term: "The patient has been on salbutamol inhaler for asthma since 2020.",
    meaning: "환자는 2020년부터 천식으로 살부타몰 흡입기를 사용해 왔습니다.",
    category: "Medication History",
  },
  {
    term: "A follow-up in eight weeks is advised to review asthma control.",
    meaning: "천식 관리를 검토하기 위해 8주 후 후속 조치가 권장됩니다.",
    category: "Follow-Up Recommendations",
  },
  {
    term: "The referral is due to persistent hoarseness for three months.",
    meaning: "3개월 동안 지속적인 쉰 목소리로 인해 의뢰합니다.",
    category: "Reason for Referral",
  },
  {
    term: "Please assess Mr. James Lee for possible vocal cord dysfunction.",
    meaning: "제임스 리 씨를 성대 기능 장애 가능성으로 평가해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "Examination showed no signs of lymphadenopathy.",
    meaning: "검사에서 림프절병증의 징후는 확인되지 않았습니다.",
    category: "Physical Examination",
  },
  {
    term: "The ECG revealed a normal sinus rhythm.",
    meaning: "심전도에서 정상 동리듬이 확인되었습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was advised to use a humidifier at night.",
    meaning: "환자는 밤에 가습기를 사용하도록 권고받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a lawyer with a history of high-pressure work.",
    meaning: "환자는 고압적인 업무 병력이 있는 변호사입니다.",
    category: "Social History",
  },

  {
    term: "The patient described the pain as sharp and localized to the lower back.",
    meaning: "환자는 통증을 하부 요추에 국한된 날카로운 통증으로 묘사했습니다.",
    category: "Symptom Description",
  },
  {
    term: "The patient has been compliant with prescribed antihypertensive medication.",
    meaning: "환자는 처방된 항고혈압 약물을 잘 준수해 왔습니다.",
    category: "Patient Compliance",
  },
  {
    term: "The provisional diagnosis is suspected appendicitis.",
    meaning: "예비 진단은 맹장염 의심입니다.",
    category: "Provisional Diagnosis",
  },
  {
    term: "The patient was recommended to engage in low-impact aerobic exercise.",
    meaning: "환자는 저강도 유산소 운동을 하도록 권장받았습니다.",
    category: "Lifestyle Recommendations",
  },
  {
    term: "On examination, the patient had a temperature of 38.2°C.",
    meaning: "검사에서 환자의 체온은 38.2°C였습니다.",
    category: "Physical Examination",
  },
  {
    term: "The blood test on 10 June showed a low sodium level of 130 mmol/L.",
    meaning:
      "6월 10일 혈액 검사에서 나트륨 수치가 130 mmol/L로 낮게 나타났습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was advised to take cetirizine 10mg for allergic symptoms.",
    meaning:
      "환자는 알레르기 증상을 위해 세티리진 10mg을 복용하도록 권고받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a carpenter with a history of heavy lifting.",
    meaning: "환자는 무거운 물건을 드는 병력이 있는 목수입니다.",
    category: "Social History",
  },
  {
    term: "I am referring Mr. John Lee for evaluation of persistent diarrhea.",
    meaning: "존 리 씨를 지속적인 설사 평가를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "Mrs. Anna Kim reported a sore throat for ten days.",
    meaning: "안나 김 부인은 10일 동안 인후통을 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide expertise in managing Ms. Park’s fibromyalgia.",
    meaning: "박 씨의 섬유근육통 관리에 귀하의 전문성을 제공해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "Ms. Sarah Choi was discharged after treatment for a urinary infection.",
    meaning: "사라 최 씨는 요로감염 치료 후 퇴원했습니다.",
    category: "Discharge Letter Opening",
  },
  {
    term: "The patient was advised to complete a course of nitrofurantoin.",
    meaning: "환자는 니트로푸란토인 치료 과정을 완료하도록 권고받았습니다.",
    category: "Discharge Instructions",
  },
  {
    term: "The patient is allergic to amoxicillin and dust.",
    meaning: "환자는 아목시실린과 먼지에 알레르기가 있습니다.",
    category: "Allergies",
  },
  {
    term: "The patient has been on insulin glargine for diabetes since 2022.",
    meaning: "환자는 2022년부터 당뇨병으로 인슐린 글라진을 사용해 왔습니다.",
    category: "Medication History",
  },
  {
    term: "A follow-up in three months is advised to review renal function.",
    meaning: "신장 기능을 검토하기 위해 3개월 후 후속 조치가 권장됩니다.",
    category: "Follow-Up Recommendations",
  },
  {
    term: "The referral is due to recurrent episodes of syncope.",
    meaning: "반복적인 실신 에피소드로 인해 의뢰합니다.",
    category: "Reason for Referral",
  },
  {
    term: "The patient described the headache as throbbing and unilateral.",
    meaning: "환자는 두통을 욱신거리고 한쪽에 국한된 것으로 묘사했습니다.",
    category: "Symptom Description",
  },
  {
    term: "The patient has adhered to the prescribed low-cholesterol diet.",
    meaning: "환자는 처방된 저콜레스테롤 식단을 준수해 왔습니다.",
    category: "Patient Compliance",
  },
  {
    term: "The provisional diagnosis is possible irritable bowel syndrome.",
    meaning: "예비 진단은 과민성 대장 증후군 가능성입니다.",
    category: "Provisional Diagnosis",
  },
  {
    term: "The patient was recommended to practice stress-reduction techniques.",
    meaning: "환자는 스트레스 감소 기법을 실천하도록 권장받았습니다.",
    category: "Lifestyle Recommendations",
  },
  {
    term: "Examination revealed a heart rate of 85 beats per minute.",
    meaning: "검사에서 심박수가 분당 85회로 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The ultrasound showed no evidence of ovarian masses.",
    meaning: "초음파 검사에서 난소 종괴의 증거는 나타나지 않았습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was instructed to avoid citrus fruits for two weeks.",
    meaning: "환자는 2주 동안 감귤류 과일을 피하도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a receptionist with a history of prolonged sitting.",
    meaning: "환자는 장시간 앉아 있는 병력이 있는 접수원입니다.",
    category: "Social History",
  },
  {
    term: "I am referring Mrs. Clara Wong for assessment of ankle swelling.",
    meaning: "클라라 웡 부인을 발목 부종 평가를 위해 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "Mr. James Park reported chest tightness for two weeks.",
    meaning: "제임스 박 씨는 2주 동안 가슴 답답함을 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide a treatment plan for Ms. Lee’s psoriasis.",
    meaning: "리 씨의 건선에 대한 치료 계획을 제공해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "Mr. Henry Kim was discharged after treatment for a tension headache.",
    meaning: "헨리 김 씨는 긴장성 두통 치료 후 퇴원했습니다.",
    category: "Discharge Letter Opening",
  },
  {
    term: "The patient was advised to practice relaxation techniques daily.",
    meaning: "환자는 매일 이완 기법을 실천하도록 권고받았습니다.",
    category: "Discharge Instructions",
  },
  {
    term: "The patient has no known food or drug allergies.",
    meaning: "환자는 알려진 음식 또는 약물 알레르기가 없습니다.",
    category: "Allergies",
  },
  {
    term: "The patient has been on losartan 50mg for hypertension since 2023.",
    meaning: "환자는 2023년부터 고혈압으로 로사르탄 50mg을 복용해 왔습니다.",
    category: "Medication History",
  },
  {
    term: "A follow-up in one month is recommended to monitor blood pressure.",
    meaning: "혈압을 모니터링하기 위해 한 달 후 후속 조치가 권장됩니다.",
    category: "Follow-Up Recommendations",
  },

  {
    term: "The patient was observed to have difficulty walking due to knee pain.",
    meaning: "환자는 무릎 통증으로 인해 걷기 어려움이 관찰되었습니다.",
    category: "Patient Observations",
  },
  {
    term: "The patient showed partial improvement after two weeks of antibiotics.",
    meaning: "환자는 2주간의 항생제 치료 후 부분적인 호전을 보였습니다.",
    category: "Treatment Response",
  },
  {
    term: "The patient has comorbidities including hypertension and type 2 diabetes.",
    meaning: "환자는 고혈압과 제2형 당뇨병을 포함한 동반 질환이 있습니다.",
    category: "Comorbidities",
  },
  {
    term: "This referral requires urgent attention due to acute symptoms.",
    meaning: "급성 증상으로 인해 이 의뢰는 긴급한 주의가 필요합니다.",
    category: "Referral Urgency",
  },
  {
    term: "Physical examination revealed a swollen right ankle.",
    meaning: "신체 검사에서 우측 발목 부종이 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "Blood tests on 15 July showed elevated alkaline phosphatase.",
    meaning: "7월 15일 혈액 검사에서 알칼리성 포스파타제 상승이 나타났습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was advised to take prednisone 10mg daily for inflammation.",
    meaning:
      "환자는 염증을 위해 프레드니손 10mg을 매일 복용하도록 권고받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a postal worker with a history of repetitive strain.",
    meaning: "환자는 반복적인 긴장 병력이 있는 우체국 직원입니다.",
    category: "Social History",
  },
  {
    term: "I am referring a patient for evaluation of chronic fatigue.",
    meaning: "만성 피로 평가를 위해 환자를 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient reported intermittent abdominal cramps for one month.",
    meaning: "환자는 한 달 동안 간헐적인 복부 경련을 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide expertise in managing inflammatory bowel disease.",
    meaning: "염증성 장 질환 관리에 귀하의 전문성을 제공해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient was discharged after treatment for acute bronchitis.",
    meaning: "환자는 급성 기관지염 치료 후 퇴원했습니다.",
    category: "Discharge Letter Opening",
  },
  {
    term: "The patient was advised to use a humidifier to ease breathing.",
    meaning:
      "환자는 호흡을 편하게 하기 위해 가습기를 사용하도록 권고받았습니다.",
    category: "Discharge Instructions",
  },
  {
    term: "The patient is allergic to NSAIDs and pet dander.",
    meaning:
      "환자는 비스테로이드성 항염증제와 반려동물 비듬에 알레르기가 있습니다.",
    category: "Allergies",
  },
  {
    term: "The patient has been on metformin 1000mg for diabetes since 2021.",
    meaning:
      "환자는 2021년부터 당뇨병으로 메트포르민 1000mg을 복용해 왔습니다.",
    category: "Medication History",
  },
  {
    term: "A follow-up in two weeks is advised to assess wound healing.",
    meaning: "상처 치유를 평가하기 위해 2주 후 후속 조치가 권장됩니다.",
    category: "Follow-Up Recommendations",
  },
  {
    term: "The referral is due to worsening asthma symptoms despite inhaler use.",
    meaning: "흡입기 사용에도 불구하고 악화된 천식 증상으로 인해 의뢰합니다.",
    category: "Reason for Referral",
  },
  {
    term: "The patient described the chest pain as burning and central.",
    meaning: "환자는 흉통을 중앙에 위치한 타는 듯한 통증으로 묘사했습니다.",
    category: "Symptom Description",
  },
  {
    term: "The patient has adhered to the prescribed gluten-free diet.",
    meaning: "환자는 처방된 글루텐 프리 식단을 준수해 왔습니다.",
    category: "Patient Compliance",
  },
  {
    term: "The provisional diagnosis is possible gastroesophageal reflux disease.",
    meaning: "예비 진단은 위식도 역류 질환 가능성입니다.",
    category: "Provisional Diagnosis",
  },
  {
    term: "The patient was recommended to reduce caffeine intake gradually.",
    meaning: "환자는 카페인 섭취를 점진적으로 줄이도록 권장받았습니다.",
    category: "Lifestyle Recommendations",
  },
  {
    term: "Examination showed a respiratory rate of 20 breaths per minute.",
    meaning: "검사에서 호흡수가 분당 20회로 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The CT scan revealed a small pancreatic cyst.",
    meaning: "CT 스캔에서 작은 췌장 낭종이 확인되었습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was instructed to avoid alcohol for three weeks.",
    meaning: "환자는 3주 동안 알코올을 피하도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a florist with frequent exposure to pollen.",
    meaning: "환자는 꽃가루에 자주 노출되는 플로리스트입니다.",
    category: "Social History",
  },
  {
    term: "I am referring a patient for investigation of recurrent nosebleeds.",
    meaning: "반복적인 코피 조사를 위해 환자를 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient reported persistent itching for six weeks.",
    meaning: "환자는 6주 동안 지속적인 가려움증을 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide a treatment plan for managing eczema flare-ups.",
    meaning: "습진 악화 관리에 대한 치료 계획을 제공해 주십시오.",
    category: "Request for Specialist Input",
  },
  {
    term: "The patient was discharged after treatment for a mild concussion.",
    meaning: "환자는 경미한 뇌진탕 치료 후 퇴원했습니다.",
    category: "Discharge Letter Opening",
  },
  {
    term: "The patient was advised to avoid screens for one week.",
    meaning: "환자는 일주일 동안 화면을 피하도록 권고받았습니다.",
    category: "Discharge Instructions",
  },
  {
    term: "The patient was observed to have a limping gait due to hip pain.",
    meaning: "환자는 고관절 통증으로 인해 절뚝이는 걸음걸이가 관찰되었습니다.",
    category: "Patient Observations",
  },
  {
    term: "The patient showed no response to initial antihistamine treatment.",
    meaning: "환자는 초기 항히스타민 치료에 반응을 보이지 않았습니다.",
    category: "Treatment Response",
  },
  {
    term: "The patient has comorbidities including obesity and sleep apnea.",
    meaning: "환자는 비만과 수면 무호흡증을 포함한 동반 질환이 있습니다.",
    category: "Comorbidities",
  },
  {
    term: "This referral is urgent due to severe abdominal pain.",
    meaning: "심한 복통으로 인해 이 의뢰는 긴급합니다.",
    category: "Referral Urgency",
  },
  {
    term: "Examination revealed bilateral wheezing in the lungs.",
    meaning: "검사에서 양쪽 폐에서 천명이 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The blood test showed a low magnesium level of 0.6 mmol/L.",
    meaning: "혈액 검사에서 마그네슘 수치가 0.6 mmol/L로 낮게 나타났습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was instructed to take magnesium supplements daily.",
    meaning: "환자는 매일 마그네슘 보충제를 복용하도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a librarian with a history of minimal physical activity.",
    meaning: "환자는 신체 활동이 적은 병력이 있는 사서입니다.",
    category: "Social History",
  },
  {
    term: "The patient is allergic to peanuts and bee stings.",
    meaning: "환자는 땅콩과 벌침에 알레르기가 있습니다.",
    category: "Allergies",
  },
  {
    term: "The patient has been on warfarin 5mg for atrial fibrillation since 2023.",
    meaning: "환자는 2023년부터 심방세동으로 와파린 5mg을 복용해 왔습니다.",
    category: "Medication History",
  },
  {
    term: "A follow-up in six weeks is recommended to review INR levels.",
    meaning: "INR 수치를 검토하기 위해 6주 후 후속 조치가 권장됩니다.",
    category: "Follow-Up Recommendations",
  },
  {
    term: "The referral is due to recurrent urinary retention.",
    meaning: "반복적인 요폐로 인해 의뢰합니다.",
    category: "Reason for Referral",
  },
  {
    term: "The patient described the cough as dry and persistent.",
    meaning: "환자는 기침을 건조하고 지속적인 것으로 묘사했습니다.",
    category: "Symptom Description",
  },
  {
    term: "The patient has been compliant with daily insulin injections.",
    meaning: "환자는 매일 인슐린 주사를 잘 준수해 왔습니다.",
    category: "Patient Compliance",
  },
  {
    term: "The provisional diagnosis is suspected thyroid nodules.",
    meaning: "예비 진단은 갑상선 결절 의심입니다.",
    category: "Provisional Diagnosis",
  },
  {
    term: "The patient was recommended to increase dietary protein intake.",
    meaning: "환자는 식이 단백질 섭취를 늘리도록 권장받았습니다.",
    category: "Lifestyle Recommendations",
  },
  {
    term: "I am referring a patient for assessment of vision changes.",
    meaning: "시력 변화 평가를 위해 환자를 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient reported joint swelling for three weeks.",
    meaning: "환자는 3주 동안 관절 부종을 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide guidance on managing osteoarthritis symptoms.",
    meaning: "골관절염 증상 관리에 대한 지침을 제공해 주십시오.",
    category: "Request for Ongoing Care",
  },
  {
    term: "The patient was discharged after treatment for a fractured wrist.",
    meaning: "환자는 손목 골절 치료 후 퇴원했습니다.",
    category: "Discharge Letter Opening",
  },
  {
    term: "The patient was advised to wear a splint for four weeks.",
    meaning: "환자는 4주 동안 부목을 착용하도록 권고받았습니다.",
    category: "Discharge Instructions",
  },
  {
    term: "The patient was observed to have reduced grip strength in the right hand.",
    meaning: "환자는 오른손에서 악력 감소가 관찰되었습니다.",
    category: "Patient Observations",
  },
  {
    term: "The patient showed significant improvement after corticosteroid therapy.",
    meaning: "환자는 코르티코스테로이드 치료 후 상당한 호전을 보였습니다.",
    category: "Treatment Response",
  },
  {
    term: "The patient has comorbidities including asthma and hypothyroidism.",
    meaning: "환자는 천식과 갑상선 기능 저하증을 포함한 동반 질환이 있습니다.",
    category: "Comorbidities",
  },
  {
    term: "This referral is urgent due to suspected pulmonary embolism.",
    meaning: "폐색전증 의심으로 인해 이 의뢰는 긴급합니다.",
    category: "Referral Urgency",
  },
  {
    term: "Examination revealed tenderness in the left iliac fossa.",
    meaning: "검사에서 좌측 장골와에 압통이 확인되었습니다.",
    category: "Physical Examination",
  },
  {
    term: "The ultrasound showed no evidence of ectopic pregnancy.",
    meaning: "초음파 검사에서 자궁외 임신의 증거는 나타나지 않았습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was instructed to apply hydrocortisone cream twice daily.",
    meaning:
      "환자는 하루 두 번 하이드로코르티손 크림을 바르도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a teacher with a history of vocal overuse.",
    meaning: "환자는 음성 과다 사용 병력이 있는 교사입니다.",
    category: "Social History",
  },
  {
    term: "The patient has no reported environmental allergies.",
    meaning: "환자는 환경 알레르기가 보고되지 않았습니다.",
    category: "Allergies",
  },
  {
    term: "The patient has been on omeprazole 20mg for GERD since 2022.",
    meaning: "환자는 2022년부터 GERD로 오메프라졸 20mg을 복용해 왔습니다.",
    category: "Medication History",
  },
  {
    term: "A follow-up in one month is advised to monitor liver function.",
    meaning: "간 기능을 모니터링하기 위해 한 달 후 후속 조치가 권장됩니다.",
    category: "Follow-Up Recommendations",
  },
  {
    term: "The referral is due to persistent lower back pain.",
    meaning: "지속적인 허리 통증으로 인해 의뢰합니다.",
    category: "Reason for Referral",
  },
  {
    term: "The patient described the rash as itchy and widespread.",
    meaning: "환자는 발진을 가렵고 광범위한 것으로 묘사했습니다.",
    category: "Symptom Description",
  },
  {
    term: "The patient has been non-compliant with antihypertensive therapy.",
    meaning: "환자는 항고혈압 치료를 준수하지 않았습니다.",
    category: "Patient Compliance",
  },
  {
    term: "The provisional diagnosis is suspected diverticulitis.",
    meaning: "예비 진단은 게실염 의심입니다.",
    category: "Provisional Diagnosis",
  },
  {
    term: "The patient was recommended to avoid processed foods.",
    meaning: "환자는 가공 식품을 피하도록 권장받았습니다.",
    category: "Lifestyle Recommendations",
  },
  {
    term: "I am referring a patient for evaluation of hearing loss.",
    meaning: "청력 손실 평가를 위해 환자를 의뢰합니다.",
    category: "Referral Letter Opening",
  },
  {
    term: "The patient reported recurring dizziness for two months.",
    meaning: "환자는 2개월 동안 반복적인 어지럼증을 보고했습니다.",
    category: "Patient History",
  },
  {
    term: "Please provide a plan for managing chronic sinusitis.",
    meaning: "만성 부비동염 관리 계획을 제공해 주십시오.",
    category: "Request for Ongoing Care",
  },
  {
    term: "The patient was discharged after treatment for dehydration.",
    meaning: "환자는 탈수 치료 후 퇴원했습니다.",
    category: "Discharge Letter Opening",
  },
  {
    term: "The patient was advised to drink electrolyte solutions daily.",
    meaning: "환자는 매일 전해질 용액을 마시도록 권고받았습니다.",
    category: "Discharge Instructions",
  },
  {
    term: "The patient was observed to have a hoarse voice during consultation.",
    meaning: "상담 중 환자는 쉰 목소리가 관찰되었습니다.",
    category: "Patient Observations",
  },
  {
    term: "The patient showed minimal response to initial pain management.",
    meaning: "환자는 초기 통증 관리에 최소한의 반응을 보였습니다.",
    category: "Treatment Response",
  },
  {
    term: "The patient has comorbidities including COPD and heart failure.",
    meaning: "환자는 COPD와 심부전을 포함한 동반 질환이 있습니다.",
    category: "Comorbidities",
  },
  {
    term: "This referral is urgent due to sudden vision changes.",
    meaning: "갑작스러운 시력 변화로 인해 이 의뢰는 긴급합니다.",
    category: "Referral Urgency",
  },
  {
    term: "Examination showed no evidence of retinal detachment.",
    meaning: "검사에서 망막 박리의 증거는 확인되지 않았습니다.",
    category: "Physical Examination",
  },
  {
    term: "The blood test revealed a high ESR of 40 mm/hr.",
    meaning: "혈액 검사에서 ESR이 40 mm/hr로 높게 나타났습니다.",
    category: "Test Results",
  },
  {
    term: "The patient was instructed to monitor for signs of infection.",
    meaning: "환자는 감염 징후를 모니터링하도록 지시받았습니다.",
    category: "Patient Instructions",
  },
  {
    term: "The patient is a baker with a history of flour dust exposure.",
    meaning: "환자는 밀가루 먼지 노출 병력이 있는 제빵사입니다.",
    category: "Social History",
  },
  {
    term: "The patient is allergic to codeine and grass pollen.",
    meaning: "환자는 코데인과 잔디 꽃가루에 알레르기가 있습니다.",
    category: "Allergies",
  },
  {
    term: "The patient has been on sertraline 100mg for anxiety since 2024.",
    meaning: "환자는 2024년부터 불안으로 서트랄린 100mg을 복용해 왔습니다.",
    category: "Medication History",
  },
  {
    term: "A follow-up in three weeks is advised to monitor treatment progress.",
    meaning: "치료 진행을 모니터링하기 위해 3주 후 후속 조치가 권장됩니다.",
    category: "Follow-Up Recommendations",
  },
  {
    term: "The referral is due to persistent joint stiffness.",
    meaning: "지속적인 관절 경직으로 인해 의뢰합니다.",
    category: "Reason for Referral",
  },
  {
    term: "The patient described the fatigue as debilitating and constant.",
    meaning: "환자는 피로를 쇠약하게 하고 지속적인 것으로 묘사했습니다.",
    category: "Symptom Description",
  },
  {
    term: "The patient has been compliant with physiotherapy sessions.",
    meaning: "환자는 물리치료 세션을 잘 준수해 왔습니다.",
    category: "Patient Compliance",
  },
  {
    term: "The provisional diagnosis is possible rheumatoid arthritis.",
    meaning: "예비 진단은 류마티스 관절염 가능성입니다.",
    category: "Provisional Diagnosis",
  },
  {
    term: "The patient was recommended to practice yoga for stress relief.",
    meaning: "환자는 스트레스 해소를 위해 요가를 실천하도록 권장받았습니다.",
    category: "Lifestyle Recommendations",
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
