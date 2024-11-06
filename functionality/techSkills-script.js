const onInit = addEventListener("DOMContentLoaded", insertSkills);

function insertSkills() {
    console.log("Skills are being added");
    let frontEndSkills = ['HTML', 'CSS', 'BootStrap', 'Angular'];
    let backEndSkills = ['Python', 'TypeScript', 'JavaScript', 'MySQL'];
    let versionControlSkills = ['Git', 'GitHub', 'GitLab'];
    let certf = ['CompTIA Project+'];

    let frontEndList = document.getElementById('frontEnd');
    let backEndList = document.getElementById('backEnd');
    let versionControlList = document.getElementById('versionControl');
    let certList = document.getElementById('certificates');

    frontEndSkills.forEach(skills => {
        const pElement = document.createElement('p');
        pElement.textContent = skills;
        pElement.classList.add('badge');
        frontEndList.appendChild(pElement);
    })

    backEndSkills.forEach(skills => {
        const pElement = document.createElement('p');
        pElement.textContent = skills;
        pElement.classList.add('badge');
        backEndList.appendChild(pElement);
    })

    versionControlSkills.forEach(skills => {
        const pElement = document.createElement('p');
        pElement.textContent = skills;
        pElement.classList.add('badge');
        versionControlList.appendChild(pElement);
    })

    certf.forEach(skills => { // Since there is only ONE certificate, skip the conditionals for diff links per certificate
        const aElement = document.createElement('a');
        aElement.href = 'https://www.credly.com/badges/922e12ff-b235-422b-9097-17107f79563e/public_url';
        aElement.target = '_blank';
        aElement.textContent = skills;
        aElement.classList.add('badge');
        aElement.classList.add('cert');
        certList.appendChild(aElement);
    })
}