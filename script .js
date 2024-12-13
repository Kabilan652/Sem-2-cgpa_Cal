function calculateCGPA() {
  const gradePoints = {
    O: 10,
    "A+": 9,
    A: 8,
    "B+": 7,
    B: 6,
    C: 5
  };

  const getGradeValue = (grade) => gradePoints[grade.toUpperCase()] || 0;

  // Get input values
  const math = getGradeValue(document.getElementById("math").value) * 4;
  const physics = getGradeValue(document.getElementById("physics").value) * 3;
  const beee = getGradeValue(document.getElementById("beee").value) * 3;
  const english = getGradeValue(document.getElementById("english").value) * 2;
  const tamil = getGradeValue(document.getElementById("tamil").value) * 1;
  const python = getGradeValue(document.getElementById("python").value) * 2;
  const csbs = getGradeValue(document.getElementById("csbs").value) * 3;
  const englishLab = getGradeValue(document.getElementById("englishLab").value) * 2;
  const beeeLab = getGradeValue(document.getElementById("beeeLab").value) * 1;
  const pythonLab = getGradeValue(document.getElementById("pythonLab").value) * 2;
  const civil = getGradeValue(document.getElementById("civil").value) * 1;

  // Calculate total weighted grade points
  const totalWeightedGradePoints = math + physics + beee + english + tamil + python + csbs + englishLab + beeeLab + pythonLab + civil;

  // Total credit hours
  const totalCredits = 24;

  // Calculate CGPA
  const cgpa = totalWeightedGradePoints / totalCredits;

  // Display result
  document.getElementById("result").innerText = `CGPA: ${cgpa.toFixed(2)}`;
}

