// 하이빅쌤 30일 완강 개인 플래너 데이터
const CURRICULUM_DATA = [
  {
    day: "Day 0",
    goal: "OT 및 소리영어 오프닝 완료 (이전 학습)",
    studyTime: "완료",
    mission: [
      "스피킹 아웃풋 학습법 숙지하기",
      "한국어와 다른 영어 소리 원리 파악하기"
    ],
    lessons: [
      { id: "OT-01", title: "OT - 왕초보_초보 스피킹을 위한 아웃풋 학습법은?", duration: "9분 32초" },
      { id: "OT-02", title: "OT - 이렇게 공부합니다", duration: "3분 1초" },
      { id: "WU-01", title: "WARM-UP - 한국어와 달라도 너무 다른 영어 소리 정복", duration: "12분 45초" },
      { id: "WU-02", title: "WARM-UP - 한국어에 없는 모음소리조각 1", duration: "29분 5초" },
      { id: "WU-03", title: "WARM-UP - 한국어에 없는 모음소리조각 2", duration: "19분 38초" }
    ]
  },
  {
    day: "Day 1",
    goal: "영어 자음 소리조각 정복",
    studyTime: "60분",
    mission: [
      "오늘 배운 소리조각 3개 큰 소리로 따라하기",
      "어려운 자음 발음(R&L) 발음 노트에 적어보기"
    ],
    lessons: [
      { id: "D1-1", title: "WARM-UP - 한국어에 없는 자음소리조각 1", duration: "29분 17초" },
      { id: "D1-2", title: "WARM-UP - 한국어에 없는 자음소리조각 2", duration: "22분 10초" },
      { id: "D1-3", title: "WARM-UP - 한국어에는 없는 영어 자음 소리조각 R&L", duration: "25분 10초" }
    ]
  },
  {
    day: "Day 2",
    goal: "Level 1. Story #1 - 인풋 훈련",
    studyTime: "60분",
    mission: [
      "흘려듣기 딕테이션 완료하기",
      "오늘 나온 주요 구동사 2개 이상 구동사 노트에 적기"
    ],
    lessons: [
      { id: "D2-1", title: "L1S1 - [인풋] Step1. 흘려듣기 딕테이션", duration: "8분 25초" },
      { id: "D2-2", title: "L1S1 - [인풋] Step2. 핀셋 리딩법", duration: "15분 3초" },
      { id: "D2-3", title: "L1S1 - [인풋] Step3. 핀셋 구동사", duration: "16분 56초" },
      { id: "D2-4", title: "L1S1 - [인풋] Step4. 핀셋 뉘앙스", duration: "8분 48초" },
      { id: "D2-5", title: "L1S1 - [인풋] Step5. 소리영어 연음연습", duration: "23분 44초" }
    ]
  },
  {
    day: "Day 3",
    goal: "Level 1. Story #1 - 아웃풋 훈련",
    studyTime: "60분",
    mission: [
      "스피드 스피킹 소리 내어 3회 반복하기",
      "막혔던 문장 소리 연음 체크하기"
    ],
    lessons: [
      { id: "D3-1", title: "L1S1 - [아웃풋] Step1. 디테일 스피킹", duration: "19분 43초" },
      { id: "D3-2", title: "L1S1 - [아웃풋] Step2. 스트레칭 스피킹", duration: "22분 43초" },
      { id: "D3-3", title: "L1S1 - [아웃풋] Step3. 스피드 스피킹", duration: "16분 10초" }
    ]
  },
  {
    day: "Day 4",
    goal: "Level 1. Story #2 - 인풋 훈련",
    studyTime: "60분",
    mission: [
      "핀셋 뉘앙스 차이 감잡기",
      "구동사 문장 입으로 암기하기"
    ],
    lessons: [
      { id: "D4-1", title: "L1S2 - [인풋] Step1. 흘려듣기 딕테이션", duration: "10분 56초" },
      { id: "D4-2", title: "L1S2 - [인풋] Step2. 핀셋 리딩법", duration: "19분 25초" },
      { id: "D4-3", title: "L1S2 - [인풋] Step3. 핀셋 구동사", duration: "19분 50초" },
      { id: "D4-4", title: "L1S2 - [인풋] Step4. 핀셋 뉘앙스", duration: "9분 52초" },
      { id: "D4-5", title: "L1S2 - [인풋] Step5. 소리영어 연음연습", duration: "24분 58초" }
    ]
  },
  {
    day: "Day 5",
    goal: "Level 1. Story #2 - 아웃풋 훈련",
    studyTime: "60분",
    mission: [
      "스트레칭 스피킹 호흡 맞춰 말하기",
      "오늘 공부 소감 메모에 기록하기"
    ],
    lessons: [
      { id: "D5-1", title: "L1S2 - [아웃풋] Step1. 디테일 스피킹", duration: "24분 53초" },
      { id: "D5-2", title: "L1S2 - [아웃풋] Step2. 스트레칭 스피킹", duration: "24분 58초" },
      { id: "D5-3", title: "L1S2 - [아웃풋] Step3. 스피드 스피킹", duration: "16분 49초" }
    ]
  },
  {
    day: "Day 6",
    goal: "Level 1. Story #3 - 인풋 훈련",
    studyTime: "60분",
    mission: [
      "연음 소리 규칙 복습하기",
      "생소한 뉘앙스 단어 발음 노트 정리"
    ],
    lessons: [
      { id: "D6-1", title: "L1S3 - [인풋] Step1. 흘려듣기 딕테이션", duration: "11분 22초" },
      { id: "D6-2", title: "L1S3 - [인풋] Step2. 핀셋 리딩법", duration: "27분 31초" },
      { id: "D6-3", title: "L1S3 - [인풋] Step3. 핀셋 구동사", duration: "13분 34초" },
      { id: "D6-4", title: "L1S3 - [인풋] Step4. 핀셋 뉘앙스", duration: "10분 42초" },
      { id: "D6-5", title: "L1S3 - [인풋] Step5. 소리영어 연음연습", duration: "26분 53초" }
    ]
  },
  {
    day: "Day 7",
    goal: "Level 1. Story #3 & 일기 쓰기",
    studyTime: "60분",
    mission: [
      "Level 1 영어 일기 작성해보기",
      "Level 1 총복습 체크박스 완료하기"
    ],
    lessons: [
      { id: "D7-1", title: "L1S3 - [아웃풋] Step1. 디테일 스피킹", duration: "12분 28초" },
      { id: "D7-2", title: "L1S3 - [아웃풋] Step2. 스트레칭 스피킹", duration: "19분 47초" },
      { id: "D7-3", title: "L1S3 - [아웃풋] Step3. 스피드 스피킹", duration: "10분 8초" },
      { id: "D7-4", title: "[2025] Level 1 일기 쓰기 훈련", duration: "16분 13초" }
    ]
  },
  {
    day: "Day 8",
    goal: "Level 2. Story #1 - 인풋 훈련",
    studyTime: "60분",
    mission: [
      "Level 2 구동사 표현 구동사 노트에 정리",
      "딕테이션 틀린 부분 소리 확인"
    ],
    lessons: [
      { id: "D8-1", title: "L2S1 - [인풋] Step1. 흘려듣기 딕테이션", duration: "9분 43초" },
      { id: "D8-2", title: "L2S1 - [인풋] Step2. 핀셋 리딩법", duration: "22분 15초" },
      { id: "D8-3", title: "L2S1 - [인풋] Step3. 핀셋 구동사", duration: "13분 47초" },
      { id: "D8-4", title: "L2S1 - [인풋] Step4. 핀셋 뉘앙스", duration: "12분 42초" },
      { id: "D8-5", title: "L2S1 - [인풋] Step5. 소리영어 연음연습", duration: "21분 7초" }
    ]
  },
  {
    day: "Day 9",
    goal: "Level 2. Story #1 - 아웃풋 훈련",
    studyTime: "60분",
    mission: [
      "10분 집중 섀도잉 말하기",
      "자연스러운 억양으로 반복하기"
    ],
    lessons: [
      { id: "D9-1", title: "L2S1 - [아웃풋] Step1. 디테일 스피킹", duration: "15분 50초" },
      { id: "D9-2", title: "L2S1 - [아웃풋] Step2. 스트레칭 스피킹", duration: "18분 41초" },
      { id: "D9-3", title: "L2S1 - [아웃풋] Step3. 스피드 스피킹", duration: "9분 27초" }
    ]
  },
  {
    day: "Day 10",
    goal: "Level 2. Story #2 - 인풋 훈련",
    studyTime: "60분",
    mission: [
      "핀셋 리딩 끊어읽기 체크",
      "핵심 구동사 암기"
    ],
    lessons: [
      { id: "D10-1", title: "L2S2 - [인풋] Step1. 흘려듣기 딕테이션", duration: "10분 15초" },
      { id: "D10-2", title: "L2S2 - [인풋] Step2. 핀셋 리딩법", duration: "26분 42초" },
      { id: "D10-3", title: "L2S2 - [인풋] Step3. 핀셋 구동사", duration: "13분 50초" },
      { id: "D10-4", title: "L2S2 - [인풋] Step4. 핀셋 뉘앙스", duration: "13분 3초" },
      { id: "D10-5", title: "L2S2 - [인풋] Step5. 소리영어 연음연습", duration: "23분 23초" }
    ]
  },
  {
    day: "Day 11",
    goal: "Level 2. Story #2 - 아웃풋 훈련",
    studyTime: "60분",
    mission: [
      "스피드 스피킹 한 번에 성공하기",
      "오늘의 5분 기록 남기기"
    ],
    lessons: [
      { id: "D11-1", title: "L2S2 - [아웃풋] Step1. 디테일 스피킹", duration: "15분 56초" },
      { id: "D11-2", title: "L2S2 - [아웃풋] Step2. 스트레칭 스피킹", duration: "17분 21초" },
      { id: "D11-3", title: "L2S2 - [아웃풋] Step3. 스피드 스피킹", duration: "13분 57초" }
    ]
  },
  {
    day: "Day 12",
    goal: "Level 2. Story #3 - 인풋 훈련",
    studyTime: "60분",
    mission: [
      "연음 현상 유의하여 듣기",
      "발음 노트에 헷갈리는 단어 추가"
    ],
    lessons: [
      { id: "D12-1", title: "L2S3 - [인풋] Step1. 흘려듣기 딕테이션", duration: "9분 29초" },
      { id: "D12-2", title: "L2S3 - [인풋] Step2. 핀셋 리딩법", duration: "14분 41초" },
      { id: "D12-3", title: "L2S3 - [인풋] Step3. 핀셋 구동사", duration: "15분 41초" },
      { id: "D12-4", title: "L2S3 - [인풋] Step4. 핀셋 뉘앙스", duration: "11분 51초" },
      { id: "D12-5", title: "L2S3 - [인풋] Step5. 소리영어 연음연습", duration: "20분 59초" }
    ]
  },
  {
    day: "Day 13",
    goal: "Level 2. Story #3 & 일기 쓰기",
    studyTime: "60분",
    mission: [
      "Level 2 일기 쓰기 연습",
      "Level 2 복습 체크 완료"
    ],
    lessons: [
      { id: "D13-1", title: "L2S3 - [아웃풋] Step1. 디테일 스피킹", duration: "14분 42초" },
      { id: "D13-2", title: "L2S3 - [아웃풋] Step2. 스트레칭 스피킹", duration: "16분 16초" },
      { id: "D13-3", title: "L2S3 - [아웃풋] Step3. 스피드 스피킹", duration: "15분 56초" },
      { id: "D13-4", title: "[2025] Level 2 일기 쓰기 훈련", duration: "16분 31초" }
    ]
  },
  {
    day: "Day 14",
    goal: "Level 3. Story #1 - 인풋 훈련",
    studyTime: "60분",
    mission: [
      "Level 3 고난도 구동사 적기",
      "문장 구조 파악하며 듣기"
    ],
    lessons: [
      { id: "D14-1", title: "L3S1 - [인풋] Step1. 흘려듣기 딕테이션", duration: "9분 36초" },
      { id: "D14-2", title: "L3S1 - [인풋] Step2. 핀셋 리딩법", duration: "18분 24초" },
      { id: "D14-3", title: "L3S1 - [인풋] Step3. 핀셋 구동사", duration: "17분 26초" },
      { id: "D14-4", title: "L3S1 - [인풋] Step4. 핀셋 뉘앙스", duration: "7분 23초" },
      { id: "D14-5", title: "L3S1 - [인풋] Step5. 소리영어 연음연습", duration: "19분 10초" }
    ]
  },
  {
    day: "Day 15",
    goal: "Level 3. Story #1 - 아웃풋 훈련",
    studyTime: "60분",
    mission: [
      "자연스럽게 말할 때까지 반복",
      "어려운 발음 노트 재확인"
    ],
    lessons: [
      { id: "D15-1", title: "L3S1 - [아웃풋] Step1. 디테일 스피킹", duration: "10분 48초" },
      { id: "D15-2", title: "L3S1 - [아웃풋] Step2. 스트레칭 스피킹", duration: "18분 20초" },
      { id: "D15-3", title: "L3S1 - [아웃풋] Step3. 스피드 스피킹", duration: "12분 25초" }
    ]
  },
  {
    day: "Day 16",
    goal: "Level 3. Story #2 - 인풋 훈련",
    studyTime: "60분",
    mission: [
      "딕테이션 정확도 확인",
      "구동사 3개 저장"
    ],
    lessons: [
      { id: "D16-1", title: "L3S2 - [인풋] Step1. 흘려듣기 딕테이션", duration: "8분 51초" },
      { id: "D16-2", title: "L3S2 - [인풋] Step2. 핀셋 리딩법", duration: "27분 17초" },
      { id: "D16-3", title: "L3S2 - [인풋] Step3. 핀셋 구동사", duration: "12분 46초" },
      { id: "D16-4", title: "L3S2 - [인풋] Step4. 핀셋 뉘앙스", duration: "9분 41초" },
      { id: "D16-5", title: "L3S2 - [인풋] Step5. 소리영어 연음연습", duration: "19분 15초" }
    ]
  },
  {
    day: "Day 17",
    goal: "Level 3. Story #2 - 아웃풋 훈련",
    studyTime: "60분",
    mission: [
      "아웃풋 3단계 연속 스피킹",
      "오늘의 공부 메모 적기"
    ],
    lessons: [
      { id: "D17-1", title: "L3S2 - [아웃풋] Step1. 디테일 스피킹", duration: "13분 54초" },
      { id: "D17-2", title: "L3S2 - [아웃풋] Step2. 스트레칭 스피킹", duration: "15분 46초" },
      { id: "D17-3", title: "L3S2 - [아웃풋] Step3. 스피드 스피킹", duration: "12분 18초" }
    ]
  },
  {
    day: "Day 18",
    goal: "Level 3. Story #3 - 인풋 훈련",
    studyTime: "60분",
    mission: [
      "연음 소리 패턴 복습",
      "뉘앙스 단어 정리"
    ],
    lessons: [
      { id: "D18-1", title: "L3S3 - [인풋] Step1. 흘려듣기 딕테이션", duration: "10분 29초" },
      { id: "D18-2", title: "L3S3 - [인풋] Step2. 핀셋 리딩법", duration: "14분 30초" },
      { id: "D18-3", title: "L3S3 - [인풋] Step3. 핀셋 구동사", duration: "13분 33초" },
      { id: "D18-4", title: "L3S3 - [인풋] Step4. 핀셋 뉘앙스", duration: "12분 57초" },
      { id: "D18-5", title: "L3S3 - [인풋] Step5. 소리영어 연음연습", duration: "22분 6초" }
    ]
  },
  {
    day: "Day 19",
    goal: "Level 3. Story #3 & 일기 쓰기",
    studyTime: "60분",
    mission: [
      "Level 3 일기 쓰기 오프라인 연습",
      "Level 3 완료 체크"
    ],
    lessons: [
      { id: "D19-1", title: "L3S3 - [아웃풋] Step1. 디테일 스피킹", duration: "25분 1초" },
      { id: "D19-2", title: "L3S3 - [아웃풋] Step2. 스트레칭 스피킹", duration: "17분 18초" },
      { id: "D19-3", title: "L3S3 - [아웃풋] Step3. 스피드 스피킹", duration: "14분 16초" },
      { id: "D19-4", title: "[2025] Level 3 일기 쓰기 훈련", duration: "12분 15초" }
    ]
  },
  {
    day: "Day 20",
    goal: "Level 4 - 마스터 인풋 훈련",
    studyTime: "60분",
    mission: [
      "Level 4 고난도 문장 따라듣기",
      "구동사 노트 총점검"
    ],
    lessons: [
      { id: "D20-1", title: "L4 - [인풋] Step1. 흘려듣기 딕테이션", duration: "7분 1초" },
      { id: "D20-2", title: "L4 - [인풋] Step2. 핀셋 리딩법", duration: "11분 25초" },
      { id: "D20-3", title: "L4 - [인풋] Step3. 핀셋 구동사", duration: "11분 54초" },
      { id: "D20-4", title: "L4 - [인풋] Step4. 핀셋 뉘앙스", duration: "17분 26초" },
      { id: "D20-5", title: "L4 - [인풋] Step5. 소리영어 연음연습", duration: "12분 22초" }
    ]
  },
  {
    day: "Day 21",
    goal: "Level 4 - 마스터 아웃풋 훈련",
    studyTime: "60분",
    mission: [
      "원어민 속도 스트레칭 스피킹",
      "오늘의 기록 완료하기"
    ],
    lessons: [
      { id: "D21-1", title: "L4 - [아웃풋] Step1. 디테일 스피킹", duration: "17분 14초" },
      { id: "D21-2", title: "L4 - [아웃풋] Step2. 스트레칭 스피킹", duration: "19분 2초" },
      { id: "D21-3", title: "L4 - [아웃풋] Step3. 스피드 스피킹", duration: "8분 29초" }
    ]
  },
  {
    day: "Day 22",
    goal: "낭독 챌린지 Part 1",
    studyTime: "60분",
    mission: [
      "낭독 챌린지 감정 살려 따라하기",
      "발음 노트 기록하기"
    ],
    lessons: [
      { id: "D22-1", title: "빅쌤 낭독챌린지 맛보기1-1", duration: "13분 39초" },
      { id: "D22-2", title: "빅쌤 낭독챌린지 맛보기1-2", duration: "11분 5초" },
      { id: "D22-3", title: "빅쌤 낭독챌린지 맛보기2-1", duration: "16분 17초" }
    ]
  },
  {
    day: "Day 23",
    goal: "낭독 챌린지 Part 2",
    studyTime: "60분",
    mission: [
      "낭독 챌린지 완강하기",
      "스스로 녹음해 들어보기"
    ],
    lessons: [
      { id: "D23-1", title: "빅쌤 낭독챌린지 맛보기2-2", duration: "11분 59초" },
      { id: "D23-2", title: "빅쌤 낭독챌린지 맛보기3-1", duration: "12분 42초" },
      { id: "D23-3", title: "빅쌤 낭독챌린지 맛보기3-2", duration: "14분 46초" }
    ]
  },
  {
    day: "Day 24",
    goal: "미드로 8Step - 인풋 훈련",
    studyTime: "60분",
    mission: [
      "미드 실전 대사 딕테이션",
      "미드에 나온 구동사 적기"
    ],
    lessons: [
      { id: "D24-1", title: "[미드로 8step] [인풋] Step1. 흘려듣기 딕테이션", duration: "11분 36초" },
      { id: "D24-2", titlePrefix: "", title: "[미드로 8step] [인풋] Step2. 핀셋 리딩법", duration: "12분" },
      { id: "D24-3", title: "[미드로 8step] [인풋] Step3. 핀셋 구동사", duration: "12분 26초" },
      { id: "D24-4", title: "[미드로 8step] [인풋] Step4. 핀셋 뉘앙스", duration: "9분 8초" },
      { id: "D24-5", title: "[미드로 8step] [인풋] Step5. 소리영어 연음연습", duration: "15분 52초" }
    ]
  },
  {
    day: "Day 25",
    goal: "미드로 8Step - 아웃풋 훈련",
    studyTime: "60분",
    mission: [
      "미드 캐릭터처럼 연기하며 스피킹",
      "오늘의 복습 체크하기"
    ],
    lessons: [
      { id: "D25-1", title: "[미드로 8step] [아웃풋] Step1. 디테일 스피킹", duration: "6분 57초" },
      { id: "D25-2", title: "[미드로 8step] [아웃풋] Step2. 스트레칭 스피킹", duration: "8분 25초" },
      { id: "D25-3", title: "[미드로 8step] [아웃풋] Step3. 스피드 스피킹", duration: "7분 13초" }
    ]
  },
  {
    day: "Day 26",
    goal: "여행영어 - 쇼핑편 Master",
    studyTime: "60분",
    mission: [
      "쇼핑 유용한 표현 4가지 입으로 익히기",
      "구동사 노트 정리"
    ],
    lessons: [
      { id: "D26-1", title: "[여행영어-쇼핑편] 1. 위치 문의", duration: "11분 38초" },
      { id: "D26-2", title: "[여행영어-쇼핑편] 2. 다른 제품 요청", duration: "10분 34초" },
      { id: "D26-3", title: "[여행영어-쇼핑편] 3. 재고 확인 요청", duration: "7분 56초" },
      { id: "D26-4", title: "[여행영어-쇼핑편] 4. 할인 정보 요청", duration: "8분 56초" }
    ]
  },
  {
    day: "Day 27",
    goal: "축약 소리 알아보기 Part 1",
    studyTime: "60분",
    mission: [
      "강조 소리와 축약 소리 원리 이해",
      "be동사 축약 발음 연습"
    ],
    lessons: [
      { id: "D27-1", title: "[축약 소리] 1. I'll be there. 어디에 힘을 주고 말해야 할까?", duration: "14분 27초" },
      { id: "D27-2", title: "[축약 소리] 2. 열심히 발음하지 말자: be 동사 들릴락 말락 발음하기", duration: "12분 36초" }
    ]
  },
  {
    day: "Day 28",
    goal: "축약 소리 알아보기 Part 2",
    studyTime: "60분",
    mission: [
      "How do you 연음 발음해보기",
      "have/has/had 축약 소리 훈련"
    ],
    lessons: [
      { id: "D28-1", title: "[축약 소리] 3. How do you는 [하으ㄹ여]", duration: "11분 27초" },
      { id: "D28-2", title: "[축약 소리] 4. have, has, had도 열심히 발음하지 않는 법", duration: "10분 47초" }
    ]
  },
  {
    day: "Day 29",
    goal: "30일 완강 최종 완성!",
    studyTime: "60분",
    mission: [
      "구동사 노트 & 발음 노트 총복습",
      "완강 소감 메모 작성하기"
    ],
    lessons: [
      { id: "D29-1", title: "🏆 하이빅쌤 커리큘럼 최종 완강 성공!", duration: "자유 학습" }
    ]
  }
];
