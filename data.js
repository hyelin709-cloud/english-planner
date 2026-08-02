// 하이빅쌤 30일 완강 플래너 데이터 (하루 1시간 기준)
const CURRICULUM_DATA = [
  {
    levelId: "day0_completed",
    levelName: "Day 0 (완료한 강의)",
    description: "이미 완료한 학습 영역입니다.",
    lessons: [
      { id: "OT-01", title: "OT - 왕초보_초보 스피킹을 위한 아웃풋 학습법은?", duration: "9분 32초" },
      { id: "OT-02", title: "OT - 이렇게 공부합니다", duration: "3분 1초" },
      { id: "WU-01", title: "WARM-UP - 한국어와 달라도 너무 다른 영어 소리 정복", duration: "12분 45초" },
      { id: "WU-02", title: "WARM-UP - 한국어에 없는 모음소리조각 1", duration: "29분 5초" },
      { id: "WU-03", title: "WARM-UP - 한국어에 없는 모음소리조각 2", duration: "19분 38초" }
    ]
  },
  {
    levelId: "day1",
    levelName: "Day 1 (오늘 추천): 자음 소리조각 정복",
    description: "목표 분량: 약 1시간 16분",
    lessons: [
      { id: "D1-1", title: "WARM-UP - 한국어에 없는 자음소리조각 1", duration: "29분 17초" },
      { id: "D1-2", title: "WARM-UP - 한국어에 없는 자음소리조각 2", duration: "22분 10초" },
      { id: "D1-3", title: "WARM-UP - 한국어에는 없는 영어 자음 소리조각 R&L", duration: "25분 10초" }
    ]
  },
  {
    levelId: "day2",
    levelName: "Day 2: Level 1 - Story #1 (인풋)",
    description: "목표 분량: 약 1시간 12분",
    lessons: [
      { id: "D2-1", title: "L1S1 - [인풋] Step1. 흘려듣기 딕테이션", duration: "8분 25초" },
      { id: "D2-2", title: "L1S1 - [인풋] Step2. 핀셋 리딩법", duration: "15분 3초" },
      { id: "D2-3", title: "L1S1 - [인풋] Step3. 핀셋 구동사", duration: "16분 56초" },
      { id: "D2-4", title: "L1S1 - [인풋] Step4. 핀셋 뉘앙스", duration: "8분 48초" },
      { id: "D2-5", title: "L1S1 - [인풋] Step5. 소리영어 연음연습", duration: "23분 44초" }
    ]
  },
  {
    levelId: "day3",
    levelName: "Day 3: Level 1 - Story #1 (아웃풋)",
    description: "목표 분량: 약 58분",
    lessons: [
      { id: "D3-1", title: "L1S1 - [아웃풋] Step1. 디테일 스피킹", duration: "19분 43초" },
      { id: "D3-2", title: "L1S1 - [아웃풋] Step2. 스트레칭 스피킹", duration: "22분 43초" },
      { id: "D3-3", title: "L1S1 - [아웃풋] Step3. 스피드 스피킹", duration: "16분 10초" }
    ]
  },
  {
    levelId: "day4",
    levelName: "Day 4: Level 1 - Story #2 (인풋)",
    description: "목표 분량: 약 1시간 25분",
    lessons: [
      { id: "D4-1", title: "L1S2 - [인풋] Step1. 흘려듣기 딕테이션", duration: "10분 56초" },
      { id: "D4-2", title: "L1S2 - [인풋] Step2. 핀셋 리딩법", duration: "19분 25초" },
      { id: "D4-3", title: "L1S2 - [인풋] Step3. 핀셋 구동사", duration: "19분 50초" },
      { id: "D4-4", title: "L1S2 - [인풋] Step4. 핀셋 뉘앙스", duration: "9분 52초" },
      { id: "D4-5", title: "L1S2 - [인풋] Step5. 소리영어 연음연습", duration: "24분 58초" }
    ]
  },
  {
    levelId: "day5",
    levelName: "Day 5: Level 1 - Story #2 (아웃풋)",
    description: "목표 분량: 약 1시간 6분",
    lessons: [
      { id: "D5-1", title: "L1S2 - [아웃풋] Step1. 디테일 스피킹", duration: "24분 53초" },
      { id: "D5-2", title: "L1S2 - [아웃풋] Step2. 스트레칭 스피킹", duration: "24분 58초" },
      { id: "D5-3", title: "L1S2 - [아웃풋] Step3. 스피드 스피킹", duration: "16분 49초" }
    ]
  },
  {
    levelId: "day6",
    levelName: "Day 6: Level 1 - Story #3 (인풋)",
    description: "목표 분량: 약 1시간 29분",
    lessons: [
      { id: "D6-1", title: "L1S3 - [인풋] Step1. 흘려듣기 딕테이션", duration: "11분 22초" },
      { id: "D6-2", title: "L1S3 - [인풋] Step2. 핀셋 리딩법", duration: "27분 31초" },
      { id: "D6-3", title: "L1S3 - [인풋] Step3. 핀셋 구동사", duration: "13분 34초" },
      { id: "D6-4", title: "L1S3 - [인풋] Step4. 핀셋 뉘앙스", duration: "10분 42초" },
      { id: "D6-5", title: "L1S3 - [인풋] Step5. 소리영어 연음연습", duration: "26분 53초" }
    ]
  },
  {
    levelId: "day7",
    levelName: "Day 7: Level 1 - Story #3 (아웃풋 & 일기)",
    description: "목표 분량: 약 58분",
    lessons: [
      { id: "D7-1", title: "L1S3 - [아웃풋] Step1. 디테일 스피킹", duration: "12분 28초" },
      { id: "D7-2", title: "L1S3 - [아웃풋] Step2. 스트레칭 스피킹", duration: "19분 47초" },
      { id: "D7-3", title: "L1S3 - [아웃풋] Step3. 스피드 스피킹", duration: "10분 8초" },
      { id: "D7-4", title: "[2025] Level 1 일기 쓰기 훈련", duration: "16분 13초" }
    ]
  },
  {
    levelId: "day8",
    levelName: "Day 8: Level 2 - Story #1 (인풋)",
    description: "목표 분량: 약 1시간 19분",
    lessons: [
      { id: "D8-1", title: "L2S1 - [인풋] Step1. 흘려듣기 딕테이션", duration: "9분 43초" },
      { id: "D8-2", title: "L2S1 - [인풋] Step2. 핀셋 리딩법", duration: "22분 15초" },
      { id: "D8-3", title: "L2S1 - [인풋] Step3. 핀셋 구동사", duration: "13분 47초" },
      { id: "D8-4", title: "L2S1 - [인풋] Step4. 핀셋 뉘앙스", duration: "12분 42초" },
      { id: "D8-5", title: "L2S1 - [인풋] Step5. 소리영어 연음연습", duration: "21분 7초" }
    ]
  },
  {
    levelId: "day9",
    levelName: "Day 9: Level 2 - Story #1 (아웃풋)",
    description: "목표 분량: 약 43분",
    lessons: [
      { id: "D9-1", title: "L2S1 - [아웃풋] Step1. 디테일 스피킹", duration: "15분 50초" },
      { id: "D9-2", title: "L2S1 - [아웃풋] Step2. 스트레칭 스피킹", duration: "18분 41초" },
      { id: "D9-3", title: "L2S1 - [아웃풋] Step3. 스피드 스피킹", duration: "9분 27초" }
    ]
  },
  {
    levelId: "day10",
    levelName: "Day 10: Level 2 - Story #2 (인풋)",
    description: "목표 분량: 약 1시간 24분",
    lessons: [
      { id: "D10-1", title: "L2S2 - [인풋] Step1. 흘려듣기 딕테이션", duration: "10분 15초" },
      { id: "D10-2", title: "L2S2 - [인풋] Step2. 핀셋 리딩법", duration: "26분 42초" },
      { id: "D10-3", title: "L2S2 - [인풋] Step3. 핀셋 구동사", duration: "13분 50초" },
      { id: "D10-4", title: "L2S2 - [인풋] Step4. 핀셋 뉘앙스", duration: "13분 3초" },
      { id: "D10-5", title: "L2S2 - [인풋] Step5. 소리영어 연음연습", duration: "23분 23초" }
    ]
  },
  {
    levelId: "day11",
    levelName: "Day 11: Level 2 - Story #2 (아웃풋)",
    description: "목표 분량: 약 47분",
    lessons: [
      { id: "D11-1", title: "L2S2 - [아웃풋] Step1. 디테일 스피킹", duration: "15분 56초" },
      { id: "D11-2", title: "L2S2 - [아웃풋] Step2. 스트레칭 스피킹", duration: "17분 21초" },
      { id: "D11-3", title: "L2S2 - [아웃풋] Step3. 스피드 스피킹", duration: "13분 57초" }
    ]
  },
  {
    levelId: "day12",
    levelName: "Day 12: Level 2 - Story #3 (인풋)",
    description: "목표 분량: 약 1시간 12분",
    lessons: [
      { id: "D12-1", title: "L2S3 - [인풋] Step1. 흘려듣기 딕테이션", duration: "9분 29초" },
      { id: "D12-2", title: "L2S3 - [인풋] Step2. 핀셋 리딩법", duration: "14분 41초" },
      { id: "D12-3", title: "L2S3 - [인풋] Step3. 핀셋 구동사", duration: "15분 41초" },
      { id: "D12-4", title: "L2S3 - [인풋] Step4. 핀셋 뉘앙스", duration: "11분 51초" },
      { id: "D12-5", title: "L2S3 - [인풋] Step5. 소리영어 연음연습", duration: "20분 59초" }
    ]
  },
  {
    levelId: "day13",
    levelName: "Day 13: Level 2 - Story #3 (아웃풋 & 일기)",
    description: "목표 분량: 약 1시간 3분",
    lessons: [
      { id: "D13-1", title: "L2S3 - [아웃풋] Step1. 디테일 스피킹", duration: "14분 42초" },
      { id: "D13-2", title: "L2S3 - [아웃풋] Step2. 스트레칭 스피킹", duration: "16분 16초" },
      { id: "D13-3", title: "L2S3 - [아웃풋] Step3. 스피드 스피킹", duration: "15분 56초" },
      { id: "D13-4", title: "[2025] Level 2 일기 쓰기 훈련", duration: "16분 31초" }
    ]
  },
  {
    levelId: "day14",
    levelName: "Day 14: Level 3 - Story #1 (인풋)",
    description: "목표 분량: 약 1시간 11분",
    lessons: [
      { id: "D14-1", title: "L3S1 - [인풋] Step1. 흘려듣기 딕테이션", duration: "9분 36초" },
      { id: "D14-2", title: "L3S1 - [인풋] Step2. 핀셋 리딩법", duration: "18분 24초" },
      { id: "D14-3", title: "L3S1 - [인풋] Step3. 핀셋 구동사", duration: "17분 26초" },
      { id: "D14-4", title: "L3S1 - [인풋] Step4. 핀셋 뉘앙스", duration: "7분 23초" },
      { id: "D14-5", title: "L3S1 - [인풋] Step5. 소리영어 연음연습", duration: "19분 10초" }
    ]
  },
  {
    levelId: "day15",
    levelName: "Day 15: Level 3 - Story #1 (아웃풋)",
    description: "목표 분량: 약 41분",
    lessons: [
      { id: "D15-1", title: "L3S1 - [아웃풋] Step1. 디테일 스피킹", duration: "10분 48초" },
      { id: "D15-2", title: "L3S1 - [아웃풋] Step2. 스트레칭 스피킹", duration: "18분 20초" },
      { id: "D15-3", title: "L3S1 - [아웃풋] Step3. 스피드 스피킹", duration: "12분 25초" }
    ]
  },
  {
    levelId: "day16",
    levelName: "Day 16: Level 3 - Story #2 (인풋)",
    description: "목표 분량: 약 1시간 22분",
    lessons: [
      { id: "D16-1", title: "L3S2 - [인풋] Step1. 흘려듣기 딕테이션", duration: "8분 51초" },
      { id: "D16-2", title: "L3S2 - [인풋] Step2. 핀셋 리딩법", duration: "27분 17초" },
      { id: "D16-3", title: "L3S2 - [인풋] Step3. 핀셋 구동사", duration: "12분 46초" },
      { id: "D16-4", title: "L3S2 - [인풋] Step4. 핀셋 뉘앙스", duration: "9분 41초" },
      { id: "D16-5", title: "L3S2 - [인풋] Step5. 소리영어 연음연습", duration: "19분 15초" }
    ]
  },
  {
    levelId: "day17",
    levelName: "Day 17: Level 3 - Story #2 (아웃풋)",
    description: "목표 분량: 약 41분",
    lessons: [
      { id: "D17-1", title: "L3S2 - [아웃풋] Step1. 디테일 스피킹", duration: "13분 54초" },
      { id: "D17-2", title: "L3S2 - [아웃풋] Step2. 스트레칭 스피킹", duration: "15분 46초" },
      { id: "D17-3", title: "L3S2 - [아웃풋] Step3. 스피드 스피킹", duration: "12분 18초" }
    ]
  },
  {
    levelId: "day18",
    levelName: "Day 18: Level 3 - Story #3 (인풋)",
    description: "목표 분량: 약 1시간 13분",
    lessons: [
      { id: "D18-1", title: "L3S3 - [인풋] Step1. 흘려듣기 딕테이션", duration: "10분 29초" },
      { id: "D18-2", title: "L3S3 - [인풋] Step2. 핀셋 리딩법", duration: "14분 30초" },
      { id: "D18-3", title: "L3S3 - [인풋] Step3. 핀셋 구동사", duration: "13분 33초" },
      { id: "D18-4", title: "L3S3 - [인풋] Step4. 핀셋 뉘앙스", duration: "12분 57초" },
      { id: "D18-5", title: "L3S3 - [인풋] Step5. 소리영어 연음연습", duration: "22분 6초" }
    ]
  },
  {
    levelId: "day19",
    levelName: "Day 19: Level 3 - Story #3 (아웃풋 & 일기)",
    description: "목표 분량: 약 1시간 8분",
    lessons: [
      { id: "D19-1", title: "L3S3 - [아웃풋] Step1. 디테일 스피킹", duration: "25분 1초" },
      { id: "D19-2", title: "L3S3 - [아웃풋] Step2. 스트레칭 스피킹", duration: "17분 18초" },
      { id: "D19-3", title: "L3S3 - [아웃풋] Step3. 스피드 스피킹", duration: "14분 16초" },
      { id: "D19-4", title: "[2025] Level 3 일기 쓰기 훈련", duration: "12분 15초" }
    ]
  },
  {
    levelId: "day20",
    levelName: "Day 20: Level 4 - 완성 (인풋)",
    description: "목표 분량: 약 59분",
    lessons: [
      { id: "D20-1", title: "L4 - [인풋] Step1. 흘려듣기 딕테이션", duration: "7분 1초" },
      { id: "D20-2", title: "L4 - [인풋] Step2. 핀셋 리딩법", duration: "11분 25초" },
      { id: "D20-3", title: "L4 - [인풋] Step3. 핀셋 구동사", duration: "11분 54초" },
      { id: "D20-4", title: "L4 - [인풋] Step4. 핀셋 뉘앙스", duration: "17분 26초" },
      { id: "D20-5", title: "L4 - [인풋] Step5. 소리영어 연음연습", duration: "12분 22초" }
    ]
  },
  {
    levelId: "day21",
    levelName: "Day 21: Level 4 - 완성 (아웃풋)",
    description: "목표 분량: 약 44분",
    lessons: [
      { id: "D21-1", title: "L4 - [아웃풋] Step1. 디테일 스피킹", duration: "17분 14초" },
      { id: "D21-2", title: "L4 - [아웃풋] Step2. 스트레칭 스피킹", duration: "19분 2초" },
      { id: "D21-3", title: "L4 - [아웃풋] Step3. 스피드 스피킹", duration: "8분 29초" }
    ]
  },
  {
    levelId: "day22",
    levelName: "Day 22: 낭독 챌린지 Part 1",
    description: "목표 분량: 약 41분",
    lessons: [
      { id: "D22-1", title: "빅쌤 낭독챌린지 맛보기1-1", duration: "13분 39초" },
      { id: "D22-2", title: "빅쌤 낭독챌린지 맛보기1-2", duration: "11분 5초" },
      { id: "D22-3", title: "빅쌤 낭독챌린지 맛보기2-1", duration: "16분 17초" }
    ]
  },
  {
    levelId: "day23",
    levelName: "Day 23: 낭독 챌린지 Part 2",
    description: "목표 분량: 약 39분",
    lessons: [
      { id: "D23-1", title: "빅쌤 낭독챌린지 맛보기2-2", duration: "11분 59초" },
      { id: "D23-2", title: "빅쌤 낭독챌린지 맛보기3-1", duration: "12분 42초" },
      { id: "D23-3", title: "빅쌤 낭독챌린지 맛보기3-2", duration: "14분 46초" }
    ]
  },
  {
    levelId: "day24",
    levelName: "Day 24: 미드로 8Step (인풋)",
    description: "목표 분량: 약 1시간 1분",
    lessons: [
      { id: "D24-1", title: "[미드로 8step] [인풋] Step1. 흘려듣기 딕테이션", duration: "11분 36초" },
      { id: "D24-2", title: "[미드로 8step] [인풋] Step2. 핀셋 리딩법", duration: "12분" },
      { id: "D24-3", title: "[미드로 8step] [인풋] Step3. 핀셋 구동사", duration: "12분 26초" },
      { id: "D24-4", title: "[미드로 8step] [인풋] Step4. 핀셋 뉘앙스", duration: "9분 8초" },
      { id: "D24-5", title: "[미드로 8step] [인풋] Step5. 소리영어 연음연습", duration: "15분 52초" }
    ]
  },
  {
    levelId: "day25",
    levelName: "Day 25: 미드로 8Step (아웃풋)",
    description: "목표 분량: 약 22분",
    lessons: [
      { id: "D25-1", title: "[미드로 8step] [아웃풋] Step1. 디테일 스피킹", duration: "6분 57초" },
      { id: "D25-2", title: "[미드로 8step] [아웃풋] Step2. 스트레칭 스피킹", duration: "8분 25초" },
      { id: "D25-3", title: "[미드로 8step] [아웃풋] Step3. 스피드 스피킹", duration: "7분 13초" }
    ]
  },
  {
    levelId: "day26",
    levelName: "Day 26: 여행영어 - 쇼핑편",
    description: "목표 분량: 약 39분",
    lessons: [
      { id: "D26-1", title: "[여행영어-쇼핑편] 1. 위치 문의", duration: "11분 38초" },
      { id: "D26-2", title: "[여행영어-쇼핑편] 2. 다른 제품 요청", duration: "10분 34초" },
      { id: "D26-3", title: "[여행영어-쇼핑편] 3. 재고 확인 요청", duration: "7분 56초" },
      { id: "D26-4", title: "[여행영어-쇼핑편] 4. 할인 정보 요청", duration: "8분 56초" }
    ]
  },
  {
    levelId: "day27",
    levelName: "Day 27: 축약되는 소리 알아보기 Part 1",
    description: "목표 분량: 약 27분",
    lessons: [
      { id: "D27-1", title: "[축약 소리] 1. I'll be there. 어디에 힘을 주고 말해야 할까?", duration: "14분 27초" },
      { id: "D27-2", title: "[축약 소리] 2. 열심히 발음하지 말자: be 동사 들릴락 말락 발음하기", duration: "12분 36초" }
    ]
  },
  {
    levelId: "day28",
    levelName: "Day 28: 축약되는 소리 알아보기 Part 2",
    description: "목표 분량: 약 22분",
    lessons: [
      { id: "D28-1", title: "[축약 소리] 3. How do you는 [하으ㄹ여]", duration: "11분 27초" },
      { id: "D28-2", title: "[축약 소리] 4. have, has, had도 열심히 발음하지 않는 법", duration: "10분 47초" }
    ]
  },
  {
    levelId: "day29",
    levelName: "Day 29: 최종 완강 및 복습",
    description: "🎉 축하합니다! 완강을 축하드립니다!",
    lessons: [
      { id: "D29-1", title: "🏆 하이빅쌤 커리큘럼 최종 완강 성공!", duration: "자유 학습" }
    ]
  }
];
