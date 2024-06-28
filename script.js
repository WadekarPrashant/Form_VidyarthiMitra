function toggleOtherRequirement() {
    const requirements = document.getElementById('requirements');
    const otherRequirement = document.getElementById('other-requirement');
    if (requirements.value === 'Other') {
      otherRequirement.classList.remove('d-none');
    } else {
      otherRequirement.classList.add('d-none');
    }
  }
  
  function toggleAdmittedCollege() {
    const admittedYes = document.getElementById('admitted-yes');
    const admittedCollegeName = document.getElementById('admitted-college-name');
    if (admittedYes.checked) {
      admittedCollegeName.classList.remove('d-none');
    } else {
      admittedCollegeName.classList.add('d-none');
    }
  }
  