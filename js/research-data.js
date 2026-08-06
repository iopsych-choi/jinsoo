/* =========================================================
   연구/논문 데이터
   ---------------------------------------------------------
   각 항목 형식:
   {
     year: 2024,
     title: "논문 제목",
     authors: "저자1, 저자2, & 저자3",
     venue: "저널명, 권(호), 페이지",
     url: "https://...",
     topics: ["토픽1", "토픽2"]
   }
   topics에 사용한 이름은 자동으로 필터 버튼에 나타납니다.
   ※ accepted/in press 논문은 아직 정식 발행 연도가 없어 발행 예정 연도(2026)로
   임시 등록해뒀습니다. 실제 발행 연도가 확정되면 year 값을 업데이트해주세요.
   ========================================================= */

const PUBLICATIONS = [
  {
    year: 2026,
    title: "On Criterion Weighting to Reduce the Adverse Impact",
    authors: "Choi, J., & Newman, D. A.",
    venue: "Journal of Applied Psychology (accepted)",
    url: "https://doi.org/10.1037/apl0001426",
    topics: ["Personnel Selection", "Research Methods"]
  },
  {
    year: 2026,
    title: "You Must Parcel Carefully If You Have To! Comparing Eight Item Parceling Strategies With the Item-Level Model for Bifactor Predictive Models",
    authors: "Choi, J., Zhang, B., Shi, D., Kwon, S., & Alexander, L. III.",
    venue: "Psychological Methods (advance online publication)",
    url: "https://doi.org/10.1037/met0000827",
    topics: ["Research Methods"]
  },
  {
    year: 2026,
    title: "Relationship-Specific Adult Attachment, Subjective Well-Being, and Job Satisfaction: A Multitrait-Multirelationship Approach",
    authors: "Choi, J., Newman, D. A., Fraley, R. C., & Newman, B. A.",
    venue: "Personality and Individual Differences",
    url: "",
    topics: ["Well-Being"]
  },
  {
    year: 2026,
    title: "The Big Five Inventory-2 in Korea: Validation and Cross-Cultural Comparisons with the U.S. and Chinese Versions",
    authors: "Choi, J., Kim, N., Zhang, B., Park, S., Cho, S., Sohn, Y., Soto, C. J., & John, O. P.",
    venue: "Assessment, 33(5), 866–889",
    url: "https://doi.org/10.1177/10731911251357466",
    topics: ["Personnel Selection", "Research Methods"]
  },
  {
    year: 2025,
    title: "A Structural After Measurement Approach to Bifactor Predictive Models",
    authors: "Choi, J., Kwon, S., & Zhang, B.",
    venue: "Structural Equation Modeling: A Multidisciplinary Journal, 32(2), 173–186",
    url: "https://doi.org/10.1080/10705511.2024.2385951",
    topics: ["Research Methods"]
  },
  {
    year: 2022,
    title: "The Multidimensional Workaholism Scale in a Korean Population: A Cross-Cultural Validation Study",
    authors: "Kim, N., Choi, J., Park, Y., & Sohn, Y.",
    venue: "Journal of Career Assessment, 30(2), 258–284",
    url: "https://doi.org/10.1177/10690727211039957",
    topics: ["Research Methods", "Well-Being"]
  },
  {
    year: 2021,
    title: "Corporate Social Responsibility Increases Job Applicants' Application Intention: A Mediated Moderation Model of Calling and Value Congruence",
    authors: "Choi, J., Park, Y., & Sohn, Y.",
    venue: "Career Development International, 26, 65–82",
    url: "https://doi.org/10.1108/CDI-02-2020-0030",
    topics: ["Personnel Selection"]
  },
  {
    year: 2020,
    title: "The Double-Edged Sword of Calling: The Mediating Role of Harmonious and Obsessive Passions in the Relationship Between a Calling, Workaholism, and Work Engagement",
    authors: "Choi, J., Surawut, P., Kim, N., Choi, Y., & Sohn, Y.",
    venue: "International Journal of Environmental Research and Public Health, 17, 6724",
    url: "https://doi.org/10.3390/ijerph17186724",
    topics: ["Well-Being"]
  },
  {
    year: 2020,
    title: "Crossover Effects of Supervisor's Workaholism on Subordinates' Turnover Intention: Mediating Role of Two Types of Work Demand and Emotional Exhaustion",
    authors: "Kim, N., Kang, Y., Choi, J., & Sohn, Y.",
    venue: "International Journal of Environmental Research and Public Health, 17, 7742",
    url: "https://doi.org/10.3390/ijerph17217742",
    topics: ["Well-Being"]
  },
  {
    year: 2020,
    title: "The Effect of Corporate Social Responsibility on Employees' Organizational Citizenship Behavior: A Moderated Mediation Model of Grit and Meaning Orientation",
    authors: "Choi, J., Sohn, Y., & Lee, S.",
    venue: "Sustainability, 12, 5411",
    url: "https://doi.org/10.3390/su12135411",
    topics: ["Well-Being"]
  }
];
