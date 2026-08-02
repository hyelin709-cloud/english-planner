// 하이빅쌤 영어 커리큘럼 데이터
const CURRICULUM_DATA = [
  {
    levelId: "intro",
    levelName: "OT & 기초 체력 WARM-UP",
    description: "학습 아웃풋 가이드 및 영어 소리 기본기 정복",
    lessons: [
      { id: "OT-01", title: "OT - 왕초보_초보 스피킹을 위한 아웃풋 학습법은?", duration: "9분 32초" },
      { id: "OT-02", title: "OT - 이렇게 공부합니다", duration: "3분 1초" },
      { id: "WU-01", title: "WARM-UP - 한국어와 달라도 너무 다른 영어 소리 정복", duration: "12분 45초" },
      { id: "WU-02", title: "WARM-UP - 한국어에 없는 모음소리조각 1", duration: "29분 5초" },
      { id: "WU-03", title: "WARM-UP - 한국어에 없는 모음소리조각 2", duration: "19분 38초" },
      { id: "WU-04", title: "WARM-UP - 한국어에 없는 자음소리조각 1", duration: "29분 17초" },
      { id: "WU-05", title: "WARM-UP - 한국어에 없는 자음소리조각 2", duration: "22분 10초" },
      { id: "WU-06", title: "WARM-UP - 한국어에는 없는 영어 자음 소리조각 R&L", duration: "25분 10초" }
    ]
  },
  {
    levelId: "level1_story1",
    levelName: "Level 1. Story #1",
    description: "인풋(딕테이션~연음) & 아웃풋(스피킹 3단계) 훈련",
    lessons: [
      { id: "L1S1-I1", title: "[인풋] Step1. 흘려듣기 딕테이션", duration: "8분 25초" },
      { id: "L1S1-I2", title: "[인풋] Step2. 핀셋 리딩법", duration: "15분 3초" },
      { id: "L1S1-I3", title: "[인풋] Step3. 핀셋 구동사", duration: "16분 56초" },
      { id: "L1S1-I4", title: "[인풋] Step4. 핀셋 뉘앙스", duration: "8분 48초" },
      { id: "L1S1-I5", title: "[인풋] Step5. 소리영어 연음연습", duration: "23분 44초" },
      { id: "L1S1-O1", title: "[아웃풋] Step1. 디테일 스피킹", duration: "19분 43초" },
      { id: "L1S1-O2", title: "[아웃풋] Step2. 스트레칭 스피킹", duration: "22분 43초" },
      { id: "L1S1-O3", title: "[아웃풋] Step3. 스피드 스피킹", duration: "16분 10초" }
    ]
  },
  {
    levelId: "level1_story2",
    levelName: "Level 1. Story #2",
    description: "스토리 #2 인풋 & 아웃풋 훈련",
    lessons: [
      { id: "L1S2-I1", title: "[인풋] Step1. 흘려듣기 딕테이션", duration: "10분 56초" },
      { id: "L1S2-I2", title: "[인풋] Step2. 핀셋 리딩법", duration: "19분 25초" },
      { id: "L1S2-I3", title: "[인풋] Step3. 핀셋 구동사", duration: "19분 50초" },
      { id: "L1S2-I4", title: "[인풋] Step4. 핀셋 뉘앙스", duration: "9분 52초" },
      { id: "L1S2-I5", title: "[인풋] Step5. 소리영어 연음연습", duration: "24분 58초" },
      { id: "L1S2-O1", title: "[아웃풋] Step1. 디테일 스피킹", duration: "24분 53초" },
      { id: "L1S2-O2", title: "[아웃풋] Step2. 스트레칭 스피킹", duration: "24분 58초" },
      { id: "L1S2-O3", title: "[아웃풋] Step3. 스피드 스피킹", duration: "16분 49초" }
    ]
  },
  {
    levelId: "level1_story3",
    levelName: "Level 1. Story #3 & 일기 쓰기",
    description: "스토리 #3 인풋/아웃풋 + 일기 쓰기 훈련",
    lessons: [
      { id: "L1S3-I1", title: "[인풋] Step1. 흘려듣기 딕테이션", duration: "11분 22초" },
      { id: "L1S3-I2", title: "[인풋] Step2. 핀셋 리딩법", duration: "27분 31초" },
      { id: "L1S3-I3", title: "[인풋] Step3. 핀셋 구동사", duration: "13분 34초" },
      { id: "L1S3-I4", title: "[인풋] Step4. 핀셋 뉘앙스", duration: "10분 42초" },
      { id: "L1S3-I5", title: "[인풋] Step5. 소리영어 연음연습", duration: "26분 53초" },
      { id: "L1S3-O1", title: "[아웃풋] Step1. 디테일 스피킹", duration: "12분 28초" },
      { id: "L1S3-O2", title: "[아웃풋] Step2. 스트레칭 스피킹", duration: "19분 47초" },
      { id: "L1S3-O3", title: "[아웃풋] Step3. 스피드 스피킹", duration: "10분 8초" },
      { id: "L1-DIARY", title: "[2025] Level 1 일기 쓰기 훈련", duration: "16분 13초" }
    ]
  },
  {
    levelId: "level2_story1",
    levelName: "Level 2. Story #1",
    description: "Level 2 스토리 #1 집중 스피킹",
    lessons: [
      { id: "L2S1-I1", title: "[인풋] Step1. 흘려듣기 딕테이션", duration: "9분 43초" },
      { id: "L2S1-I2", title: "[인풋] Step2. 핀셋 리딩법", duration: "22분 15초" },
      { id: "L2S1-I3", title: "[인풋] Step3. 핀셋 구동사", duration: "13분 47초" },
      { id: "L2S1-I4", title: "[인풋] Step4. 핀셋 뉘앙스", duration: "12분 42초" },
      { id: "L2S1-I5", title: "[인풋] Step5. 소리영어 연음연습", duration: "21분 7초" },
      { id: "L2S1-O1", title: "[아웃풋] Step1. 디테일 스피킹", duration: "15분 50초" },
      { id: "L2S1-O2", title: "[아웃풋] Step2. 스트레칭 스피킹", duration: "18분 41초" },
      { id: "L2S1-O3", title: "[아웃풋] Step3. 스피드 스피킹", duration: "9분 27초" }
    ]
  },
  {
    levelId: "level2_story2",
    levelName: "Level 2. Story #2",
    description: "Level 2 스토리 #2 인풋 & 아웃풋",
    lessons: [
      { id: "L2S2-I1", title: "[인풋] Step1. 흘려듣기 딕테이션", duration: "10분 15초" },
      { id: "L2S2-I2", title: "[인풋] Step2. 핀셋 리딩법", duration: "26분 42초" },
      { id: "L2S2-I3", title: "[인풋] Step3. 핀셋 구동사", duration: "13분 50초" },
      { id: "L2S2-I4", title: "[인풋] Step4. 핀셋 뉘앙스", duration: "13분 3초" },
      { id: "L2S2-I5", title: "[인풋] Step5. 소리영어 연음연습", duration: "23분 23초" },
      { id: "L2S2-O1", title: "[아웃풋] Step1. 디테일 스피킹", duration: "15분 56초" },
      { id: "L2S2-O2", title: "[아웃풋] Step2. 스트레칭 스피킹", duration: "17분 21초" },
      { id: "L2S2-O3", title: "[아웃풋] Step3. 스피드 스피킹", duration: "13분 57초" }
    ]
  },
  {
    levelId: "level2_story3",
    levelName: "Level 2. Story #3 & 일기 쓰기",
    description: "Level 2 스토리 #3 및 일기 쓰기",
    lessons: [
      { id: "L2S3-I1", title: "[인풋] Step1. 흘려듣기 딕테이션", duration: "9분 29초" },
      { id: "L2S3-I2", title: "[인풋] Step2. 핀셋 리딩법", duration: "14분 41초" },
      { id: "L2S3-I3", title: "[인풋] Step3. 핀셋 구동사", duration: "15분 41초" },
      { id: "L2S3-I4", title: "[인풋] Step4. 핀셋 뉘앙스", duration: "11분 51초" },
      { id: "L2S3-I5", title: "[인풋] Step5. 소리영어 연음연습", duration: "20분 59초" },
      { id: "L2S3-O1", title: "[아웃풋] Step1. 디테일 스피킹", duration: "14분 42초" },
      { id: "L2S3-O2", title: "[아웃풋] Step2. 스트레칭 스피킹", duration: "16분 16초" },
      { id: "L2S3-O3", title: "[아웃풋] Step3. 스피드 스피킹", duration: "15분 56초" },
      { id: "L2-DIARY", title: "[2025] Level 2 일기 쓰기 훈련", duration: "16분 31초" }
    ]
  },
  {
    levelId: "level3_story1",
    levelName: "Level 3. Story #1",
    description: "Level 3 심화 표현 & 아웃풋",
    lessons: [
      { id: "L3S1-I1", title: "[인풋] Step1. 흘려듣기 딕테이션", duration: "9분 36초" },
      { id: "L3S1-I2", title: "[인풋] Step2. 핀셋 리딩법", duration: "18분 24초" },
      { id: "L3S1-I3", title: "[인풋] Step3. 핀셋 구동사", duration: "17분 26초" },
      { id: "L3S1-I4", title: "[인풋] Step4. 핀셋 뉘앙스", duration: "7분 23초" },
      { id: "L3S1-I5", title: "[인풋] Step5. 소리영어 연음연습", duration: "19분 10초" },
      { id: "L3S1-O1", title: "[아웃풋] Step1. 디테일 스피킹", duration: "10분 48초" },
      { id: "L3S1-O2", title: "[아웃풋] Step2. 스트레칭 스피킹", duration: "18분 20초" },
      { id: "L3S1-O3", title: "[아웃풋] Step3. 스피드 스피킹", duration: "12분 25초" }
    ]
  },
  {
    levelId: "level3_story2",
    levelName: "Level 3. Story #2",
    description: "Level 3 스토리 #2 실전 스피킹",
    lessons: [
      { id: "L3S2-I1", title: "[인풋] Step1. 흘려듣기 딕테이션", duration: "8분 51초" },
      { id: "L3S2-I2", title: "[인풋] Step2. 핀셋 리딩법", duration: "27분 17초" },
      { id: "L3S2-I3", title: "[인풋] Step3. 핀셋 구동사", duration: "12분 46초" },
      { id: "L3S2-I4", title: "[인풋] Step4. 핀셋 뉘앙스", duration: "9분 41초" },
      { id: "L3S2-I5", title: "[인풋] Step5. 소리영어 연음연습", duration: "19분 15초" },
      { id: "L3S2-O1", title: "[아웃풋] Step1. 디테일 스피킹", duration: "13분 54초" },
      { id: "L3S2-O2", title: "[아웃풋] Step2. 스트레칭 스피킹", duration: "15분 46초" },
      { id: "L3S2-O3", title: "[아웃풋] Step3. 스피드 스피킹", duration: "12분 18초" }
    ]
  },
  {
    levelId: "level3_story3",
    levelName: "Level 3. Story #3 & 일기 쓰기",
    description: "Level 3 스토리 #3 및 일기 쓰기",
    lessons: [
      { id: "L3S3-I1", title: "[인풋] Step1. 흘려듣기 딕테이션", duration: "10분 29초" },
      { id: "L3S3-I2", title: "[인풋] Step2. 핀셋 리딩법", duration: "14분 30초" },
      { id: "L3S3-I3", title: "[인풋] Step3. 핀셋 구동사", duration: "13분 33초" },
      { id: "L3S3-I4", title: "[인풋] Step4. 핀셋 뉘앙스", duration: "12분 57초" },
      { id: "L3S3-I5", title: "[인풋] Step5. 소리영어 연음연습", duration: "22분 6초" },
      { id: "L3S3-O1", title: "[아웃풋] Step1. 디테일 스피킹", duration: "25분 1초" },
      { id: "L3S3-O2", title: "[아웃풋] Step2. 스트레칭 스피킹", duration: "17분 18초" },
      { id: "L3S3-O3", title: "[아웃풋] Step3. 스피드 스피킹", duration: "14분 16초" },
      { id: "L3-DIARY", title: "[2025] Level 3 일기 쓰기 훈련", duration: "12분 15초" }
    ]
  },
  {
    levelId: "level4",
    levelName: "Level 4 (완성)",
    description: "고급 인풋 & 아웃풋 완강 마스터",
    lessons: [
      { id: "L4-I1", title: "[인풋] Step1. 흘려듣기 딕테이션", duration: "7분 1초" },
      { id: "L4-I2", title: "[인풋] Step2. 핀셋 리딩법", duration: "11분 25초" },
      { id: "L4-I3", title: "[인풋] Step3. 핀셋 구동사", duration: "11분 54초" },
      { id: "L4-I4", title: "[인풋] Step4. 핀셋 뉘앙스", duration: "17분 26초" },
      { id: "L4-I5", title: "[인풋] Step5. 소리영어 연음연습", duration: "12분 22초" },
      { id: "L4-O1", title: "[아웃풋] Step1. 디테일 스피킹", duration: "17분 14초" },
      { id: "L4-O2", title: "[아웃풋] Step2. 스트레칭 스피킹", duration: "19분 2초" },
      { id: "L4-O3", title: "[아웃풋] Step3. 스피드 스피킹", duration: "8분 29초" }
    ]
  },
  {
    levelId: "special_challenge",
    levelName: "특별 부록 - 낭독 챌린지 & 미드로 8Step",
    description: "빅쌤 낭독 챌린지 맛보기 & 미드 응용 훈련",
    lessons: [
      { id: "NC-1-1", title: "빅쌤 낭독챌린지 맛보기1-1", duration: "13분 39초" },
      { id: "NC-1-2", title: "빅쌤 낭독챌린지 맛보기1-2", duration: "11분 5초" },
      { id: "NC-2-1", title: "빅쌤 낭독챌린지 맛보기2-1", duration: "16분 17초" },
      { id: "NC-2-2", title: "빅쌤 낭독챌린지 맛보기2-2", duration: "11분 59초" },
      { id: "NC-3-1", title: "빅쌤 낭독챌린지 맛보기3-1", duration: "12분 42초" },
      { id: "NC-3-2", title: "빅쌤 낭독챌린지 맛보기3-2", duration: "14분 46초" },
      { id: "MD-I1", title: "[미드로 8step] [인풋] Step1. 흘려듣기 딕테이션", duration: "11분 36초" },
      { id: "MD-I2", title: "[미드로 8step] [인풋] Step2. 핀셋 리딩법", duration: "12분" },
      { id: "MD-I3", title: "[미드로 8step] [인풋] Step3. 핀셋 구동사", duration: "12분 26초" },
      { id: "MD-I4", title: "[미드로 8step] [인풋] Step4. 핀셋 뉘앙스", duration: "9분 8초" },
      { id: "MD-I5", title: "[미드로 8step] [인풋] Step5. 소리영어 연음연습", duration: "15분 52초" },
      { id: "MD-O1", title: "[미드로 8step] [아웃풋] Step1. 디테일 스피킹", duration: "6분 57초" },
      { id: "MD-O2", title: "[미드로 8step] [아웃풋] Step2. 스트레칭 스피킹", duration: "8분 25초" },
      { id: "MD-O3", title: "[미드로 8step] [아웃풋] Step3. 스피드 스피킹", duration: "7분 13초" }
    ]
  },
  {
    levelId: "theme_lectures",
    levelName: "테마 특강 (여행영어 & 축약 소리)",
    description: "실전 여행 쇼핑 및 영어 축약 원리 특강",
    lessons: [
      { id: "TR-01", title: "[여행영어-쇼핑편] 1. 위치 문의", duration: "11분 38초" },
      { id: "TR-02", title: "[여행영어-쇼핑편] 2. 다른 제품 요청", duration: "10분 34초" },
      { id: "TR-03", title: "[여행영어-쇼핑편] 3. 재고 확인 요청", duration: "7분 56초" },
      { id: "TR-04", title: "[여행영어-쇼핑편] 4. 할인 정보 요청", duration: "8분 56초" },
      { id: "RD-01", title: "[축약 소리] 1. I'll be there. 어디에 힘을 주고 말해야 할까?", duration: "14분 27초" },
      { id: "RD-02", title: "[축약 소리] 2. 열심히 발음하지 말자: be 동사 들릴락 말락 발음하기", duration: "12분 36초" },
      { id: "RD-03", title: "[축약 소리] 3. How do you는 [하으ㄹ여]", duration: "11분 27초" },
      { id: "RD-04", title: "[축약 소리] 4. have, has, had도 열심히 발음하지 않는 법", duration: "10분 47초" }
    ]
  }
];