/**
 * This file is used to fill the team list page with team member's cards
 * 
 * Author: FIT2101 - Group 17
 * Version: 1.0
 * Last Modified: 15/10/22
 */


/**
 * This function is used to add a card to the view for every member
 */
function fillTeamList(){
    // Getting the team list and checking if it is empty
    const team = JSON.parse(localStorage.getItem("team"));
    if(team == null){
        return;
    }

    // Getting the container and adding the cards
    let teamListContainer = document.getElementById("team-list-container");
    teamListContainer.innerHTML = ""
    for(let i=0; i<team.length; i++){
        let member = new Member();
        member.fromJson(team[i]);
        let name = member.getName();
        let email= member.getEmail();

        teamListContainer.innerHTML +=  `
        <div class = "team-card">
            <div class = "team-container">
                ${name}<br>
                ${email}
                <button type="button" class = "delete-member-button" onclick="deleteMember(${i})">Delete</button>
                <button type="button" class = "analytics-button" onclick="openAnalytics(${i})">Analytics</button>
            </div>
        </div>`;
        
    }
}
// Run function on page load
window.onload = fillTeamList();