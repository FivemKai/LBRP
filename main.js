const DISCORD_ID = "1316443267189047306"; // Only your ID can see full keys

document.getElementById("generateKey").addEventListener("click", async () => {
    let res = await fetch("https://your-bot-api.example.com/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ discordId: DISCORD_ID })
    });
    let data = await res.json();
    document.getElementById("output").innerText = "New Key: " + data.key;
});

document.getElementById("viewKeys").addEventListener("click", async () => {
    let res = await fetch("https://your-bot-api.example.com/list?discordId=" + DISCORD_ID);
    let data = await res.json();
    document.getElementById("output").innerText = "Keys: " + data.keys.join(", ");
});
