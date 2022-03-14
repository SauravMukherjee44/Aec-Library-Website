let contributorsReference = [];
const searchBox = document.getElementById("searchBox");
const contributorsContainer = document.getElementById('contributors_container');
searchBox.addEventListener('keyup', (key_value) => {
    const inputValueLower = key_value.target.value.toLowerCase();
    const filteredData = contributorsReference.filter(reference => {
    return reference.login.toLowerCase().includes(inputValueLower);
    });
    displayDataCards(filteredData);
})
const contributorInfo = async function() {
    try {
    const data = await fetch('https://api.github.com/repos/SauravMukherjee44/Aec-Library-Website/contributors?per_page=100');
    contributorsReference = await data.json();
    displayDataCards(contributorsReference);
    } catch (err) {
    console.error(err);
    }
};

const displayDataCards = function(contributorReferences){
    const textLiteral = contributorReferences
    .map((contribReference) => {
        return `
    <div class="contributor_div"><a href="${contribReference.html_url}" target="_blank_"><img src="${contribReference.avatar_url}"/></a><div><h4>${contribReference.login}</h4><p>Contributions: ${contribReference.contributions}</p></div></div>
    `;
    })
    .join('');
    contributorsContainer.innerHTML = textLiteral;
};

contributorInfo();