const bounties = [
    {
        objective: "Kill",
        amount: 1000,
        time:-1,
        bonus: 0.1,
        type: "Dojo"
    },
    {
        objective: "Harvest",
        amount: 25,
        time:-1,
        bonus: 0.1,
        type: "Farm"
    },
    {
        objective: "Contract",
        amount: 1000,
        time:-1,
        bonus: 0.05,
        type: "WarehouseSpeed"
    },
    {
        objective: "Upgrade",
        amount: 2,
        time:-1,
        bonus: 0.01,
        type: "UpgradeCratesMulti"
    },
    {
        objective: "Mine",
        amount: 1e10,
        time:-1,
        bonus: 0.1,
        type: "Mining"
    },
    {
        objective: "MineDiamantium",
        amount: 1e3,
        time:3600,
        bonus: 1,
        type: "Mining"
    },
    {
        objective: "SpendGold",
        amount: 1e12,
        time: 600,
        bonus: 1,
        type: "GoldMulti"
    },
    {
        objective: "KillArenaBoss",
        amount: 5,
        time:-1,
        bonus: 0.1,
        type: "MainStats"
    },
    {
        objective: "SpendArenaTokens",
        amount: 50,
        time:7200,
        bonus: 1,
        type: "ArenaTokens"
    }
]

var availableBounties = [

]

var bountyStats = {
    perm: {
        dojo: 1,
        farm: 1,
        warehouseSpeed: 1,
        cratesMulti: 1,
        mainStats: 1,
        mining: 1
    },
    temp: [

    ]
}