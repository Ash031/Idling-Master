var crafting = {
    page : 0,
    items : [
        {
            name : 'Copper Shirt',
            bonus : 'Defense',
            perLevel : 0.05,
            level : 1,
            cost : [
                {
                    ore : 0,
                    baseCost : 5
                },
                {
                    ore : 1,
                    baseCost : 10
                }
            ]
        },
        {
            name : 'Copper Stick',
            bonus : 'Strength',
            perLevel : 0.05,
            level : 1,
            cost :[
                { 
                    ore:0,
                    baseCost: 5
                },
                {
                    ore : 1,
                    baseCost : 10
                }
            ]
        },
        {
            name : 'Bronze Stick',
            bonus : 'HP',
            perLevel : 0.05,
            level : 1,
            cost :[
                { 
                    ore:0,
                    baseCost: 5
                },
                {
                    ore : 1,
                    baseCost : 30
                },
                {
                    ore : 2,
                    baseCost : 15
                }
            ]
        },
        {
            name : 'Bronze Dagger',
            bonus : 'Strength',
            perLevel : 0.1,
            level : 1,
            cost :[
                { 
                    ore:0,
                    baseCost: 50
                },
                {
                    ore : 2,
                    baseCost : 100
                }
            ]
        },
        {
            name : 'Iron BreadStick',
            bonus : 'HP',
            perLevel : 0.05,
            level : 1,
            cost :[
                { 
                    ore:0,
                    baseCost: 500
                },
                {
                    ore : 3,
                    baseCost : 100
                }
            ]
        },
        {
            name : 'Iron Dog',
            bonus : 'Strength',
            perLevel : 0.15,
            level : 1,
            cost :[
                { 
                    ore:0,
                    baseCost: 50000
                },
                {
                    ore : 3,
                    baseCost : 1000
                }
            ]
        },
        {
            name : 'Smelted Helmet',
            bonus : 'Defense',
            perLevel : 0.15,
            level : 1,
            cost :[
                { 
                    ore:0,
                    baseCost: 50000
                },
                {
                    ore : 4,
                    baseCost : 100
                }
            ]
        },
        {
            name : 'Smelted Axe',
            bonus : 'Strength',
            perLevel : 0.15,
            level : 1,
            cost :[
                { 
                    ore:0,
                    baseCost: 50000
                },
                {
                    ore : 4,
                    baseCost : 1000
                }
            ]
        },
        {
            name : 'Radioactive Soup',
            bonus : 'HP',
            perLevel : 0.25,
            level : 1,
            cost :[
                {
                    ore : 5,
                    baseCost : 100
                }
            ]
        },
        {
            name : 'Radioactive Ironed Bronze Rod',
            bonus : 'Mixed',
            perLevel : 0.10,
            level : 1,
            cost :[
                { 
                    ore:0,
                    baseCost: 5000000
                },
                { 
                    ore:2,
                    baseCost: 5000
                },
                { 
                    ore:3,
                    baseCost: 5000000
                },
                {
                    ore : 5,
                    baseCost : 1000
                }
            ]
        },
        {
            name : 'Red and Purple Axe',
            bonus : 'Strength',
            perLevel : 0.5,
            level : 1,
            cost :[
                { 
                    ore:6,
                    baseCost: 100
                },
                {
                    ore : 7,
                    baseCost : 100
                }
            ]
        },
        {
            name : 'Red Shoes',
            bonus : 'Defense',
            perLevel : 0.35,
            level : 1,
            cost :[
                { 
                    ore:0,
                    baseCost: 50000
                },
                { 
                    ore:6,
                    baseCost: 500
                }
            ]
        },
        {
            name : 'Purple Pants',
            bonus : 'Defense',
            perLevel : 0.35,
            level : 1,
            cost :[
                {
                    ore : 0,
                    baseCost : 50000
                },
                { 
                    ore:7,
                    baseCost: 500
                }
            ]
        },
        {
            name : 'Hardened Underpants',
            bonus : 'HP',
            perLevel : 0.7,
            level : 1,
            cost :[
                { 
                    ore:0,
                    baseCost: 50000
                },
                {
                    ore : 8,
                    baseCost : 1000
                }
            ]
        },
        {
            name : 'Hardened Bedrock Wall',
            bonus : 'Defense',
            perLevel : 1,
            level : 1,
            cost :[
                { 
                    ore:8,
                    baseCost: 50000
                },
                {
                    ore : 9,
                    baseCost : 1000
                }
            ]
        },
        {
            name : 'Gigglium Jelly',
            bonus : 'HP',
            perLevel : 1.15,
            level : 1,
            cost :[
                { 
                    ore:10,
                    baseCost: 50000
                }
            ]
        },
        {
            name : 'Diamond Armor Set',
            bonus : 'Mixed',
            perLevel : 1.2,
            level : 1,
            cost :[
                {
                    ore : 11,
                    baseCost : 10000
                }
            ]
        },
        {
            name : 'Combined Set',
            bonus : 'Mixed',
            perLevel : 1.5,
            level : 1,
            cost :[
                {
                    ore : 7,
                    baseCost : 10000
                },
                {
                    ore : 8,
                    baseCost : 10000
                },
                {
                    ore : 9,
                    baseCost : 10000
                },
                {
                    ore : 10,
                    baseCost : 10000
                },
                {
                    ore : 11,
                    baseCost : 10000
                }
            ]
        }
    ]
}


var ores = [
    {
        name : 'Coal',
        quant : 0,
        clones : 0,
        mult : 0.01
    },
    {
        name : 'Copper',
        quant : 0,
        clones : 0,
        mult : 0.01
    },
    {
        name : 'Bronze',
        quant : 0,
        clones : 0,
        mult : 0.001
    },
    {
        name : 'Iron',
        quant : 0,
        clones : 0,
        mult : 0.0001
    },
    {
        name : 'Smeltium',
        quant : 0,
        clones : 0,
        mult : 0.00001
    },
    {
        name : 'Radiotium',
        quant : 0,
        clones : 0,
        mult : 0.00001
    },
    {
        name : 'Redium',
        quant : 0,
        clones : 0,
        mult : 0.000001
    },
    {
        name : 'Purplium',
        quant : 0,
        clones : 0,
        mult : 0.000001
    },
    {
        name : 'Hardium',
        quant : 0,
        clones : 0,
        mult : 0.0000001
    },
    {
        name : 'Bedrock',
        quant : 0,
        clones : 0,
        mult : 0.00000001
    },
    {
        name : 'Jigglium',
        quant : 0,
        clones : 0,
        mult : 0.000000001
    },
    {
        name : 'Diamantium',
        quant : 0,
        clones : 0,
        mult : 0.0000000001
    }
]