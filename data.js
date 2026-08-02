// 하이빅쌤 30일 완강 개인 플래너 데이터
const CURRICULUM_DATA = [
  {
    day: "Day 1",
    goal: "OT & 영어 소리 기본 원리 오프닝",
    studyTime: "약 50~60분 내외",
    mission: [
      "스피킹 아웃풋 학습법 숙지하기",
      "한국어와 다른 영어 소리 원리 파악하기"
    ],
    review: [
      "다음날 소리 원리 상기",
      "주말에 입모양 다시 점검"
    ],
    memoPlaceholder: "OT를 듣고 느낀 완강 다짐이나 소리 원리를 적어보세요 ✍️",
    lessons: [
      { id: "OT-01", title: "OT - 왕초보_초보 스피킹을 위한 아웃풋 학습법은?", duration: "9분 32초" },
      { id: "OT-02", title: "OT - 이렇게 공부합니다", duration: "3분 1초" },
      { id: "WU-01", title: "WARM-UP - 한국어와 달라도 너무 다른 영어 소리 정복", duration: "12분 45초" },
      { id: "WU-02", title: "WARM-UP - 한국어에 없는 모음소리조각 1", duration: "29분 5초" },
      { id: "WU-03", title: "WARM-UP - 한국어에 없는 모음소리조각 2", duration: "19분 38초" }
    ]
  },
  {
    day: "Day 2",
    goal: "영어 자음 소리조각 정복",
    studyTime: "필수 60분 + 필요시 분할 가능",
    mission: [
      "오늘 배운 소리조각 3개 큰 소리로 따라하기",
      "어려운 자음 발음(R&L) 발음 노트에 적어보기"
    ],
    review: [
      "다음날 자음 소리 소리내어 복습",
      "3일 뒤 R&L 발음 3회 재연습",
      "7일 뒤 전체 자음 소리점검"
    ],
    memoPlaceholder: "오늘 가장 헷갈렸던 자음 소리와 혀 위치를 기록해보세요 ✍️",
    lessons: [
      { id: "D1-1", title: "WARM-UP - 한국어에 없는 자음소리조각 1", duration: "29분 17초" },
      { id: "D1-2", title: "WARM-UP - 한국어에 없는 자음소리조각 2", duration: "22분 10초" },
      { id: "D1-3", title: "WARM-UP - 한국어에는 없는 영어 자음 소리조각 R&L", duration: "25분 10초" }
    ]
  },
  {
    day: "Day 3",
    goal: "Level 1. Story #1 - 인풋 훈련",
    studyTime: "약 50~60분 (편한 속도로 수강)",
    mission: [
      "흘려듣기 딕테이션 완료하기",
      "오늘 나온 주요 구동사 2개 이상 구동사 노트에 적기"
    ],
    review: [
      "다음날 딕테이션 틀린 문장 1회 읽기",
      "3일 뒤 핵심 구동사 뜻 1.5배속 복습",
      "7일 뒤 스토리 전체 연음 흘려듣기"
    ],
    memoPlaceholder: "오늘 딕테이션하면서 안 들렸던 소리 패턴을 기록해보세요 ✍️",
    lessons: [
      { id: "D2-1", title: "L1S1 - [인풋] Step1. 흘려듣기 딕테이션", duration: "8분 25초" },
      { id: "D2-2", title: "L1S1 - [인풋] Step2. 핀셋 리딩법", duration: "15분 3초" },
      { id: "D2-3", title: "L1S1 - [인풋] Step3. 핀셋 구동사", duration: "16분 56초" },
      { id: "D2-4", title: "L1S1 - [인풋] Step4. 핀셋 뉘앙스", duration: "8분 48초" },
      { id: "D2-5", title: "L1S1 - [인풋] Step5. 소리영어 연음연습", duration: "23분 44초" }
    ]
  },
  {
    day: "Day 4",
    goal: "Level 1. Story #1 - 아웃풋 훈련",
    studyTime: "약 40~50분 내외",
    mission: [
      "스피드 스피킹 소리 내어 3회 반복하기",
      "막혔던 문장 소리 연음 체크하기"
    ],
    review: [
      "다음날 스피드 스피킹 1회 재도전",
      "3일 뒤 스트레칭 스피킹 억양 복습",
      "7일 뒤 입에 꼬였던 문장 최종 점검"
    ],
    memoPlaceholder: "입에 잘 붙지 않아서 여러 번 연습한 문장을 적어보세요 ✍️",
    lessons: [
      { id: "D3-1", title: "L1S1 - [아웃풋] Step1. 디테일 스피킹", duration: "19분 43초" },
      { id: "D3-2", title: "L1S1 - [아웃풋] Step2. 스트레칭 스피킹", duration: "22분 43초" },
      { id: "D3-3", title: "L1S1 - [아웃풋] Step3. 스피드 스피킹", duration: "16분 10초" }
    ]
  },
  {
    day: "Day 5",
    goal: "Level 1. Story #2 - 인풋 훈련",
    studyTime: "약 60분 내외 (필요시 끊어가기)",
    mission: [
      "핀셋 뉘앙스 차이 감잡기",
      "구동사 문장 입으로 암기하기"
    ],
    review: [
      "다음날 뉘앙스 차이 문장 다시 읽기",
      "3일 뒤 구동사 노상 기억 점검",
      "7일 뒤 연음 규칙 눈으로 복습"
    ],
    memoPlaceholder: "새롭게 알게 된 뉘앙스 차이나 표현을 기록해보세요 ✍️",
    lessons: [
      { id: "D4-1", title: "L1S2 - [인풋] Step1. 흘려듣기 딕테이션", duration: "10분 56초" },
      { id: "D4-2", title: "L1S2 - [인풋] Step2. 핀셋 리딩법", duration: "19분 25초" },
      { id: "D4-3", title: "L1S2 - [인풋] Step3. 핀셋 구동사", duration: "19분 50초" },
      { id: "D4-4", title: "L1S2 - [인풋] Step4. 핀셋 뉘앙스", duration: "9분 52초" },
      { id: "D4-5", title: "L1S2 - [인풋] Step5. 소리영어 연음연습", duration: "24분 58초" }
    ]
  },
  {
    day: "Day 6",
    goal: "Level 1. Story #2 - 아웃풋 훈련",
    studyTime: "약 50~60분 내외",
    mission: [
      "스트레칭 스피킹 호흡 맞춰 말하기",
      "오늘 공부 소감 메모에 기록하기"
    ],
    review: [
      "다음날 호흡/리듬 맞춰 1회 읽기",
      "3일 뒤 스피드 스피킹 암기 체크",
      "7일 뒤 Story #2 통째로 따라하기"
    ],
    memoPlaceholder: "오늘 스피킹을 연습하며 느껴진 변화나 다짐을 적어보세요 ✍️",
    lessons: [
      { id: "D5-1", title: "L1S2 - [아웃풋] Step1. 디테일 스피킹", duration: "24분 53초" },
      { id: "D5-2", title: "L1S2 - [아웃풋] Step2. 스트레칭 스피킹", duration: "24분 58초" },
      { id: "D5-3", title: "L1S2 - [아웃풋] Step3. 스피드 스피킹", duration: "16분 49초" }
    ]
  },
  {
    day: "Day 7",
    goal: "Level 1. Story #3 - 인풋 훈련",
    studyTime: "약 60분 내외 (여유시 추가 수강)",
    mission: [
      "연음 소리 규칙 복습하기",
      "생소한 뉘앙스 단어 발음 노트 정리"
    ],
    review: [
      "다음날 딕테이션 단어 확인",
      "3일 뒤 핀셋 리딩 구문 복습",
      "7일 뒤 Story #1~3 구동사 총점검"
    ],
    memoPlaceholder: "오늘 인풋 학습 중 인상 깊었던 예문을 기록해보세요 ✍️",
    lessons: [
      { id: "D6-1", title: "L1S3 - [인풋] Step1. 흘려듣기 딕테이션", duration: "11분 22초" },
      { id: "D6-2", title: "L1S3 - [인풋] Step2. 핀셋 리딩법", duration: "27분 31초" },
      { id: "D6-3", title: "L1S3 - [인풋] Step3. 핀셋 구동사", duration: "13분 34초" },
      { id: "D6-4", title: "L1S3 - [인풋] Step4. 핀셋 뉘앙스", duration: "10분 42초" },
      { id: "D6-5", title: "L1S3 - [인풋] Step5. 소리영어 연음연습", duration: "26분 53초" }
    ]
  },
  {
    day: "Day 8",
    goal: "Level 1. Story #3 & 일기 쓰기",
    studyTime: "필수 50분 + 영작 10분",
    mission: [
      "Level 1 영어 일기 작성해보기",
      "Level 1 총복습 체크박스 완료하기"
    ],
    review: [
      "다음날 작성한 일기 3회 낭독",
      "3일 뒤 Level 1 전체 스피드 스피킹",
      "7일 뒤 Level 1 핵심 오디오 복습"
    ],
    memoPlaceholder: "Level 1을 마치며 내가 쓴 일기 문장이나 소감을 적어보세요 ✍️",
    lessons: [
      { id: "D7-1", title: "L1S3 - [아웃풋] Step1. 디테일 스피킹", duration: "12분 28초" },
      { id: "D7-2", title: "L1S3 - [아웃풋] Step2. 스트레칭 스피킹", duration: "19분 47초" },
      { id: "D7-3", title: "L1S3 - [아웃풋] Step3. 스피드 스피킹", duration: "10분 8초" },
      { id: "D7-4", title: "[2025] Level 1 일기 쓰기 훈련", duration: "16분 13초" }
    ]
  },
  {
    day: "Day 9",
    goal: "Level 2. Story #1 - 인풋 훈련",
    studyTime: "약 60분 내외",
    mission: [
      "Level 2 구동사 표현 구동사 노트에 정리",
      "딕테이션 틀린 부분 소리 확인"
    ],
    review: [
      "다음날 Level 2 신규 구동사 암기",
      "3일 뒤 연음 구간 음성 재청취",
      "7일 뒤 핀셋 리딩 구조 복습"
    ],
    memoPlaceholder: "Level 2로 올라오면서 새롭게 배운 구동사나 표현을 적어보세요 ✍️",
    lessons: [
      { id: "D8-1", title: "L2S1 - [인풋] Step1. 흘려듣기 딕테이션", duration: "9분 43초" },
      { id: "D8-2", title: "L2S1 - [인풋] Step2. 핀셋 리딩법", duration: "22분 15초" },
      { id: "D8-3", title: "L2S1 - [인풋] Step3. 핀셋 구동사", duration: "13분 47초" },
      { id: "D8-4", title: "L2S1 - [인풋] Step4. 핀셋 뉘앙스", duration: "12분 42초" },
      { id: "D8-5", title: "L2S1 - [인풋] Step5. 소리영어 연음연습", duration: "21분 7초" }
    ]
  },
  {
    day: "Day 10",
    goal: "Level 2. Story #1 - 아웃풋 훈련",
    studyTime: "약 40~50분 (집중 스피킹)",
    mission: [
      "10분 집중 섀도잉 말하기",
      "자연스러운 억양으로 반복하기"
    ],
    review: [
      "다음날 스피드 스피킹 암송",
      "3일 뒤 스트레칭 호흡 재점검",
      "7일 뒤 녹음 후 자기 발음 체크"
    ],
    memoPlaceholder: "오늘 스피킹 훈련에서 유독 매끄럽게 연결된 표현을 적어보세요 ✍️",
    lessons: [
      { id: "D9-1", title: "L2S1 - [아웃풋] Step1. 디테일 스피킹", duration: "15분 50초" },
      { id: "D9-2", title: "L2S1 - [아웃풋] Step2. 스트레칭 스피킹", duration: "18분 41초" },
      { id: "D9-3", title: "L2S1 - [아웃풋] Step3. 스피드 스피킹", duration: "9분 27초" }
    ]
  },
  {
    day: "Day 11",
    goal: "Level 2. Story #2 - 인풋 훈련",
    studyTime: "약 60분 내외 (자유롭게 조절)",
    mission: [
      "핀셋 리딩 끊어읽기 체크",
      "핵심 구동사 암기"
    ],
    review: [
      "다음날 끊어읽기 직독직해 복습",
      "3일 뒤 구동사 퀴즈 스스로 내기",
      "7일 뒤 연음 법칙 전체 확인"
    ],
    memoPlaceholder: "오늘 문장 끊어읽기(청크) 훈련에서 배운 단서를 기록해보세요 ✍️",
    lessons: [
      { id: "D10-1", title: "L2S2 - [인풋] Step1. 흘려듣기 딕테이션", duration: "10분 15초" },
      { id: "D10-2", title: "L2S2 - [인풋] Step2. 핀셋 리딩법", duration: "26분 42초" },
      { id: "D10-3", title: "L2S2 - [인풋] Step3. 핀셋 구동사", duration: "13분 50초" },
      { id: "D10-4", title: "L2S2 - [인풋] Step4. 핀셋 뉘앙스", duration: "13분 3초" },
      { id: "D10-5", title: "L2S2 - [인풋] Step5. 소리영어 연음연습", duration: "23분 23초" }
    ]
  },
  {
    day: "Day 12",
    goal: "Level 2. Story #2 - 아웃풋 훈련",
    studyTime: "약 45~55분 내외",
    mission: [
      "스피드 스피킹 한 번에 성공하기",
      "오늘의 5분 기록 남기기"
    ],
    review: [
      "다음날 섀도잉 3분 연속 시도",
      "3일 뒤 스피드 스피킹 재도전",
      "7일 뒤 뉘앙스 살려 말하기 복습"
    ],
    memoPlaceholder: "오늘 연습한 스피드 스피킹 최고 기록이나 느낀 점을 적어보세요 ✍️",
    lessons: [
      { id: "D11-1", title: "L2S2 - [아웃풋] Step1. 디테일 스피킹", duration: "15분 56초" },
      { id: "D11-2", title: "L2S2 - [아웃풋] Step2. 스트레칭 스피킹", duration: "17분 21초" },
      { id: "D11-3", title: "L2S2 - [아웃풋] Step3. 스피드 스피킹", duration: "13분 57초" }
    ]
  },
  {
    day: "Day 13",
    goal: "Level 2. Story #3 - 인풋 훈련",
    studyTime: "약 60분 내외",
    mission: [
      "연음 현상 유의하여 듣기",
      "발음 노트에 헷갈리는 단어 추가"
    ],
    review: [
      "다음날 딕테이션 헷갈린 어휘 복습",
      "3일 뒤 핀셋 뉘앙스 차이 재확인",
      "7일 뒤 Story #3 전체 인풋 음성 들어가기"
    ],
    memoPlaceholder: "잘 안 들렸다가 연음 법칙을 알고 들리게 된 단어를 적어보세요 ✍️",
    lessons: [
      { id: "D12-1", title: "L2S3 - [인풋] Step1. 흘려듣기 딕테이션", duration: "9분 29초" },
      { id: "D12-2", title: "L2S3 - [인풋] Step2. 핀셋 리딩법", duration: "14분 41초" },
      { id: "D12-3", title: "L2S3 - [인풋] Step3. 핀셋 구동사", duration: "15분 41초" },
      { id: "D12-4", title: "L2S3 - [인풋] Step4. 핀셋 뉘앙스", duration: "11분 51초" },
      { id: "D12-5", title: "L2S3 - [인풋] Step5. 소리영어 연음연습", duration: "20분 59초" }
    ]
  },
  {
    day: "Day 14",
    goal: "Level 2. Story #3 & 일기 쓰기",
    studyTime: "필수 60분 + 여유시 영작 추가",
    mission: [
      "Level 2 일기 쓰기 연습",
      "Level 2 복습 체크 완료"
    ],
    review: [
      "다음날 Level 2 일기 낭독",
      "3일 뒤 Level 2 아웃풋 스피킹 총정리",
      "7일 뒤 Level 2 전체 구동사 다시읽기"
    ],
    memoPlaceholder: "Level 2를 마무리하는 소감이나 직접 쓴 일기를 기록해보세요 ✍️",
    lessons: [
      { id: "D13-1", title: "L2S3 - [아웃풋] Step1. 디테일 스피킹", duration: "14분 42초" },
      { id: "D13-2", title: "L2S3 - [아웃풋] Step2. 스트레칭 스피킹", duration: "16분 16초" },
      { id: "D13-3", title: "L2S3 - [아웃풋] Step3. 스피드 스피킹", duration: "15분 56초" },
      { id: "D13-4", title: "[2025] Level 2 일기 쓰기 훈련", duration: "16분 31초" }
    ]
  },
  {
    day: "Day 15",
    goal: "Level 3. Story #1 - 인풋 훈련",
    studyTime: "약 60분 내외",
    mission: [
      "Level 3 고난도 구동사 적기",
      "문장 구조 파악하며 듣기"
    ],
    review: [
      "다음날 심화 구동사 복습",
      "3일 뒤 핀셋 리딩 긴 문장 직독직해",
      "7일 뒤 연음 소리 패턴 리마인드"
    ],
    memoPlaceholder: "Level 3 진입 후 느껴진 문장 길이의 변화나 표현을 정리해보세요 ✍️",
    lessons: [
      { id: "D14-1", title: "L3S1 - [인풋] Step1. 흘려듣기 딕테이션", duration: "9분 36초" },
      { id: "D14-2", title: "L3S1 - [인풋] Step2. 핀셋 리딩법", duration: "18분 24초" },
      { id: "D14-3", title: "L3S1 - [인풋] Step3. 핀셋 구동사", duration: "17분 26초" },
      { id: "D14-4", title: "L3S1 - [인풋] Step4. 핀셋 뉘앙스", duration: "7분 23초" },
      { id: "D14-5", title: "L3S1 - [인풋] Step5. 소리영어 연음연습", duration: "19분 10초" }
    ]
  },
  {
    day: "Day 16",
    goal: "Level 3. Story #1 - 아웃풋 훈련",
    studyTime: "약 40~50분 내외",
    mission: [
      "자연스럽게 말할 때까지 반복",
      "어려운 발음 노트 재확인"
    ],
    review: [
      "다음날 스피드 스피킹 1회 반복",
      "3일 뒤 억양 및 강세 섀도잉",
      "7일 뒤 전체 스피킹 스무스하게 연결"
    ],
    memoPlaceholder: "오늘 아웃풋 훈련 중 내 목소리로 완벽히 내뱉은 문장을 적어보세요 ✍️",
    lessons: [
      { id: "D15-1", title: "L3S1 - [아웃풋] Step1. 디테일 스피킹", duration: "10분 48초" },
      { id: "D15-2", title: "L3S1 - [아웃풋] Step2. 스트레칭 스피킹", duration: "18분 20초" },
      { id: "D15-3", title: "L3S1 - [아웃풋] Step3. 스피드 스피킹", duration: "12분 25초" }
    ]
  },
  {
    day: "Day 17",
    goal: "Level 3. Story #2 - 인풋 훈련",
    studyTime: "약 60분 내외 (필요시 분할)",
    mission: [
      "딕테이션 정확도 확인",
      "구동사 3개 저장"
    ],
    review: [
      "다음날 딕테이션 틀린 어휘 재점검",
      "3일 뒤 핀셋 뉘앙스 문맥 복습",
      "7일 뒤 Story #2 인풋 핵심 정리"
    ],
    memoPlaceholder: "오늘 딕테이션하며 단어를 놓쳤던 이유나 원인을 분석해보세요 ✍️",
    lessons: [
      { id: "D16-1", title: "L3S2 - [인풋] Step1. 흘려듣기 딕테이션", duration: "8분 51초" },
      { id: "D16-2", title: "L3S2 - [인풋] Step2. 핀셋 리딩법", duration: "27분 17초" },
      { id: "D16-3", title: "L3S2 - [인풋] Step3. 핀셋 구동사", duration: "12분 46초" },
      { id: "D16-4", title: "L3S2 - [인풋] Step4. 핀셋 뉘앙스", duration: "9분 41초" },
      { id: "D16-5", title: "L3S2 - [인풋] Step5. 소리영어 연음연습", duration: "19분 15초" }
    ]
  },
  {
    day: "Day 18",
    goal: "Level 3. Story #2 - 아웃풋 훈련",
    studyTime: "약 40~50분 내외",
    mission: [
      "아웃풋 3단계 연속 스피킹",
      "오늘의 공부 메모 적기"
    ],
    review: [
      "다음날 스피드 스피킹 연소 복습",
      "3일 뒤 스트레칭 리듬 재연습",
      "7일 뒤 입에 가장 잘 익은 문장 체크"
    ],
    memoPlaceholder: "오늘 말하기 연습 후 느껴진 뿌듯함이나 기록을 적어보세요 ✍️",
    lessons: [
      { id: "D17-1", title: "L3S2 - [아웃풋] Step1. 디테일 스피킹", duration: "13분 54초" },
      { id: "D17-2", title: "L3S2 - [아웃풋] Step2. 스트레칭 스피킹", duration: "15분 46초" },
      { id: "D17-3", title: "L3S2 - [아웃풋] Step3. 스피드 스피킹", duration: "12분 18초" }
    ]
  },
  {
    day: "Day 19",
    goal: "Level 3. Story #3 - 인풋 훈련",
    studyTime: "약 60분 내외",
    mission: [
      "연음 소리 패턴 복습",
      "뉘앙스 단어 정리"
    ],
    review: [
      "다음날 신규 뉘앙스 단어 암기",
      "3일 뒤 핀셋 리딩 긴 문장 끊어읽기",
      "7일 뒤 Level 3 전체 인풋 훑어보기"
    ],
    memoPlaceholder: "오늘 배운 표현 중 실생활에서 쓰고 싶은 영어 문장을 기록해 보세요 ✍️",
    lessons: [
      { id: "D18-1", title: "L3S3 - [인풋] Step1. 흘려듣기 딕테이션", duration: "10분 29초" },
      { id: "D18-2", title: "L3S3 - [인풋] Step2. 핀셋 리딩법", duration: "14분 30초" },
      { id: "D18-3", title: "L3S3 - [인풋] Step3. 핀셋 구동사", duration: "13분 33초" },
      { id: "D18-4", title: "L3S3 - [인풋] Step4. 핀셋 뉘앙스", duration: "12분 57초" },
      { id: "D18-5", title: "L3S3 - [인풋] Step5. 소리영어 연음연습", duration: "22분 6초" }
    ]
  },
  {
    day: "Day 20",
    goal: "Level 3. Story #3 & 일기 쓰기",
    studyTime: "필수 60분 + 영작 10분",
    mission: [
      "Level 3 일기 쓰기 오프라인 연습",
      "Level 3 완료 체크"
    ],
    review: [
      "다음날 작성한 일기 낭독",
      "3일 뒤 Level 3 핵심 아웃풋 복습",
      "7일 뒤 Level 3 구동사 총점검"
    ],
    memoPlaceholder: "Level 3를 마치며 내 영어 실력에 생긴 긍정적인 변화를 적어보세요 ✍️",
    lessons: [
      { id: "D19-1", title: "L3S3 - [아웃풋] Step1. 디테일 스피킹", duration: "25분 1초" },
      { id: "D19-2", title: "L3S3 - [아웃풋] Step2. 스트레칭 스피킹", duration: "17분 18초" },
      { id: "D19-3", title: "L3S3 - [아웃풋] Step3. 스피드 스피킹", duration: "14분 16초" },
      { id: "D19-4", title: "[2025] Level 3 일기 쓰기 훈련", duration: "12분 15초" }
    ]
  },
  {
    day: "Day 21",
    goal: "Level 4 - 마스터 인풋 훈련",
    studyTime: "약 50~60분 내외",
    mission: [
      "Level 4 고난도 문장 따라듣기",
      "구동사 노트 총점검"
    ],
    review: [
      "다음날 고난도 문장 구조 복습",
      "3일 뒤 딕테이션 미흡한 소리 재청취",
      "7일 뒤 Level 4 연음 패턴 상기"
    ],
    memoPlaceholder: "Level 4 고급 문장에서 가장 멋졌던 구문이나 단어를 적어보세요 ✍️",
    lessons: [
      { id: "D20-1", title: "L4 - [인풋] Step1. 흘려듣기 딕테이션", duration: "7분 1초" },
      { id: "D20-2", title: "L4 - [인풋] Step2. 핀셋 리딩법", duration: "11분 25초" },
      { id: "D20-3", title: "L4 - [인풋] Step3. 핀셋 구동사", duration: "11분 54초" },
      { id: "D20-4", title: "L4 - [인풋] Step4. 핀셋 뉘앙스", duration: "17분 26초" },
      { id: "D20-5", title: "L4 - [인풋] Step5. 소리영어 연음연습", duration: "12분 22초" }
    ]
  },
  {
    day: "Day 22",
    goal: "Level 4 - 마스터 아웃풋 훈련",
    studyTime: "약 45~55분 내외",
    mission: [
      "원어민 속도 스트레칭 스피킹",
      "오늘의 기록 완료하기"
    ],
    review: [
      "다음날 원어민 속도 섀도잉 1회",
      "3일 뒤 스피드 스피킹 완벽 도전",
      "7일 뒤 Level 4 전체 마스터 점검"
    ],
    memoPlaceholder: "원어민 속도를 따라가며 느꼈던 스피킹 쾌감을 소감으로 적어보세요 ✍️",
    lessons: [
      { id: "D21-1", title: "L4 - [아웃풋] Step1. 디테일 스피킹", duration: "17분 14초" },
      { id: "D21-2", title: "L4 - [아웃풋] Step2. 스트레칭 스피킹", duration: "19분 2초" },
      { id: "D21-3", title: "L4 - [아웃풋] Step3. 스피드 스피킹", duration: "8분 29초" }
    ]
  },
  {
    day: "Day 23",
    goal: "낭독 챌린지 Part 1",
    studyTime: "약 40~50분 (즐겁게 따라하기)",
    mission: [
      "낭독 챌린지 감정 살려 따라하기",
      "발음 노트 기록하기"
    ],
    review: [
      "다음날 낭독 음성 1회 재낭독",
      "3일 뒤 감정 표정 살려 말하기",
      "7일 뒤 낭독 챌린지 녹음 듣기"
    ],
    memoPlaceholder: "낭독하며 감정을 실어 말할 때 잘 살려진 표현을 기록해보세요 ✍️",
    lessons: [
      { id: "D22-1", title: "빅쌤 낭독챌린지 맛보기1-1", duration: "13분 39초" },
      { id: "D22-2", title: "빅쌤 낭독챌린지 맛보기1-2", duration: "11분 5초" },
      { id: "D22-3", title: "빅쌤 낭독챌린지 맛보기2-1", duration: "16분 17초" }
    ]
  },
  {
    day: "Day 24",
    goal: "낭독 챌린지 Part 2",
    studyTime: "약 40~50분 내외",
    mission: [
      "낭독 챌린지 완강하기",
      "스스로 녹음해 들어보기"
    ],
    review: [
      "다음날 낭독 Part 2 오디오 복습",
      "3일 뒤 전체 낭독 연결해서 읽기",
      "7일 뒤 낭독 챌린지 모범 음성 청취"
    ],
    memoPlaceholder: "스스로 녹음한 내 목소리를 들으며 느낀 점이나 개선점을 적어보세요 ✍️",
    lessons: [
      { id: "D23-1", title: "빅쌤 낭독챌린지 맛보기2-2", duration: "11분 59초" },
      { id: "D23-2", title: "빅쌤 낭독챌린지 맛보기3-1", duration: "12분 42초" },
      { id: "D23-3", title: "빅쌤 낭독챌린지 맛보기3-2", duration: "14분 46초" }
    ]
  },
  {
    day: "Day 25",
    goal: "미드로 8Step - 인풋 훈련",
    studyTime: "약 60분 내외 (편하게 듣기)",
    mission: [
      "미드 실전 대사 딕테이션",
      "미드에 나온 구동사 적기"
    ],
    review: [
      "다음날 미드 구동사 복습",
      "3일 뒤 미드 대사 연음 소리 복습",
      "7일 뒤 미드 대사 무자막 들어가기"
    ],
    memoPlaceholder: "미드 속 대사 중 진짜 원어민스러웠던 구동사나 표현을 적어보세요 ✍️",
    lessons: [
      { id: "D24-1", title: "[미드로 8step] [인풋] Step1. 흘려듣기 딕테이션", duration: "11분 36초" },
      { id: "D24-2", title: "[미드로 8step] [인풋] Step2. 핀셋 리딩법", duration: "12분" },
      { id: "D24-3", title: "[미드로 8step] [인풋] Step3. 핀셋 구동사", duration: "12분 26초" },
      { id: "D24-4", title: "[미드로 8step] [인풋] Step4. 핀셋 뉘앙스", duration: "9분 8초" },
      { id: "D24-5", title: "[미드로 8step] [인풋] Step5. 소리영어 연음연습", duration: "15분 52초" }
    ]
  },
  {
    day: "Day 26",
    goal: "미드로 8Step - 아웃풋 훈련",
    studyTime: "약 30~40분 (짧고 굵게 스피킹)",
    mission: [
      "미드 캐릭터처럼 연기하며 스피킹",
      "오늘의 복습 체크하기"
    ],
    review: [
      "다음날 미드 캐릭터 연기 재연",
      "3일 뒤 미드 스피드 스피킹",
      "7일 뒤 전체 대사 외워 말하기"
    ],
    memoPlaceholder: "미드 연기를 하며 가장 몰입해서 말했던 장면을 적어보세요 ✍️",
    lessons: [
      { id: "D25-1", title: "[미드로 8step] [아웃풋] Step1. 디테일 스피킹", duration: "6분 57초" },
      { id: "D25-2", title: "[미드로 8step] [아웃풋] Step2. 스트레칭 스피킹", duration: "8분 25초" },
      { id: "D25-3", title: "[미드로 8step] [아웃풋] Step3. 스피드 스피킹", duration: "7분 13초" }
    ]
  },
  {
    day: "Day 27",
    goal: "여행영어 - 쇼핑편 Master",
    studyTime: "약 40~50분 내외",
    mission: [
      "쇼핑 유용한 표현 4가지 입으로 익히기",
      "구동사 노트 정리"
    ],
    review: [
      "다음날 쇼핑 필수 표현 4개 암송",
      "3일 뒤 여행 상황 롤플레잉 복습",
      "7일 뒤 바로 나올 때까지 연습"
    ],
    memoPlaceholder: "해외 여행 가며 진짜 쓰게 될 것 같은 쇼핑 표현 1개를 적어보세요 ✍️",
    lessons: [
      { id: "D26-1", title: "[여행영어-쇼핑편] 1. 위치 문의", duration: "11분 38초" },
      { id: "D26-2", title: "[여행영어-쇼핑편] 2. 다른 제품 요청", duration: "10분 34초" },
      { id: "D26-3", title: "[여행영어-쇼핑편] 3. 재고 확인 요청", duration: "7분 56초" },
      { id: "D26-4", title: "[여행영어-쇼핑편] 4. 할인 정보 요청", duration: "8분 56초" }
    ]
  },
  {
    day: "Day 28",
    goal: "축약 소리 알아보기 Part 1",
    studyTime: "약 30~40분 (가볍게 개념 정복)",
    mission: [
      "강조 소리와 축약 소리 원리 이해",
      "be동사 축약 발음 연습"
    ],
    review: [
      "다음날 be동사 축약 발음 복습",
      "3일 뒤 강조/축약 리듬 살려 읽기",
      "7일 뒤 축약 소리 원리 재상기"
    ],
    memoPlaceholder: "열심히 발음하지 않고 힘을 빼고 발음해야 하는 원리를 기록해보세요 ✍️",
    lessons: [
      { id: "D27-1", title: "[축약 소리] 1. I'll be there. 어디에 힘을 주고 말해야 할까?", duration: "14분 27초" },
      { id: "D27-2", title: "[축약 소리] 2. 열심히 발음하지 말자: be 동사 들릴락 말락 발음하기", duration: "12분 36초" }
    ]
  },
  {
    day: "Day 29",
    goal: "축약 소리 알아보기 Part 2",
    studyTime: "약 30~40분 내외",
    mission: [
      "How do you 연음 발음해보기",
      "have/has/had 축약 소리 훈련"
    ],
    review: [
      "다음날 How do you / have 축약 복습",
      "3일 뒤 축약 소리 전체 4개 강의 총정리",
      "7일 뒤 미드 듣기 시 축약 원리 적용"
    ],
    memoPlaceholder: "How do you [하으ㄹ여]처럼 버터 흘러가듯 말해보는 연습 소감을 적어보세요 ✍️",
    lessons: [
      { id: "D28-1", title: "[축약 소리] 3. How do you는 [하으ㄹ여]", duration: "11분 27초" },
      { id: "D28-2", title: "[축약 소리] 4. have, has, had도 열심히 발음하지 않는 법", duration: "10분 47초" }
    ]
  },
  {
    day: "Day 30",
    goal: "🏆 완강 축하 & 앞으로의 영어 루틴 만들기",
    studyTime: "자유 학습 & 회고 시간",
    mission: [
      "구동사 노트 & 발음 노트 총복습",
      "완강 소감 메모 작성하기"
    ],
    review: [
      "완강 후 1주 뒤 나만의 영어 루틴 점검",
      "완강 후 1달 뒤 플래너 앱 추억 및 복습"
    ],
    memoPlaceholder: "30일 동안 포기하지 않고 달려온 나 자신에게 주는 칭찬과 소감을 적어보세요 🏆✍️",
    lessons: [
      { id: "D29-1", title: "🏆 하이빅쌤 커리큘럼 최종 완강 성공!", duration: "자유 학습" }
    ]
  }
];
