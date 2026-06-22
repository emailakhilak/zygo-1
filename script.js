const infoBox = document.getElementById("info-box");

function showInfo(part){

    if(part === "engine"){

        infoBox.innerHTML = `
        <h2>🟡 Engine System</h2>
        <br>
        <p><b>Health:</b> 74%</p>
        <br>
        <p>High engine temperature detected.</p>
        <br>
        <p><b>Possible Causes:</b></p>
        <ul>
            <li>Low engine oil</li>
            <li>Cooling system issue</li>
            <li>Excessive load</li>
        </ul>
        <br>
        <p><b>Predicted Failure:</b> 20 Days</p>
        `;
    }

    if(part === "brake"){

        infoBox.innerHTML = `
        <h2>🔴 Brake System</h2>
        <br>
        <p><b>Health:</b> 42%</p>
        <br>
        <p>Brake pad wear detected.</p>
        <br>
        <p>Risk Level: High</p>
        <br>
        <p><b>Predicted Failure:</b> 12 Days</p>
        `;
    }

    if(part === "battery"){

        infoBox.innerHTML = `
        <h2>🟢 Battery</h2>
        <br>
        <p><b>Health:</b> 92%</p>
        <br>
        <p>Battery performing normally.</p>
        <br>
        <p><b>Estimated Life:</b> 14 Months</p>
        `;
    }

}