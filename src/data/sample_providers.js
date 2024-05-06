const sample_providers = [
    {provider_name: "Ridgewood Pediatrics",
        practice_type: ["pediatrics"],
        practitioners:["Dr. Mary White", "Dr. Roberto Martinez"],
        location: { street_address:"123 Ridgewood Ave.",
                    city: "Ridgewood",
                    state: "NJ",
                    zip:  "07450"
                },
        insurance:["aetna", "blue cross", "humana", "united healthcare"]
    },
    {provider_name: "Tribeca Pediatrics",
        practice_type: ["pediatrics"],
        practitioners:["Dr. Joseph Smith", "Dr. Sandra Sanchez"],
        location: { street_address : "7869 Main St.",
                    city: "Hoboken",
                    state: "NJ",
                    zip:"34566"
        },
        insurance:["aetna", "blue cross", "humana", "united healthcare", "emblem"]
    },
    {provider_name: "Baker Health",
        practice_type: ["pediatrics", "primary care"],
        practitioners:["Dr. Andrew Baker", "Dr. Silvia Schubert"],
        location: { street_address: "1333 Paramus Rd",
                    city: "Paramus",
                    state:"NJ",
                    zip: "07652"
        },
        insurance:["aetna", "blue cross", "humana", "united healthcare"]
    },
    {provider_name: "Weiss Medical",
        practice_type: ["allergy", "inmunology"],
        practitioners:["Dr. Robert Weiss", "Dr. Chris Goschen"],
        location: { street_address: "1333 Paramus Rd",
                    city: "Paramus",
                    state:"NJ",
                    zip: "07652"
        },
        insurance:["aetna", "blue cross"]
    },
    {provider_name: "Paramus Medical",
        practice_type: ["allergy","asthma"],
        practitioners:["Dr. Juan Gomez", "Dr. Peter Higgins"],
        location: { street_address: "876 Mountain Rd",
                    city: "Montclair",
                    state:"NJ",
                    zip: "07042"
        },
        insurance:["aetna", "blue cross", "humana", "united healthcare"]
    },
    {provider_name: "Derma Medical",
        practice_type: ["dermatology"],
        practitioners:["Dr Anne Chung", "Dr Isita Patel"],
        location: { street_address: "30 W Century Rd.",
                    city: "Paramus",
                    state:"NJ",
                    zip: "07652"
        },
        insurance:[]
    },
    {provider_name: "Advanced Dematology",
        practice_type: ["dermatology"],
        practitioners:["Dr. Deeyana Dehkan", "Dr Megan Li"],
        location: { street_address: "246 Hamburg Tpke",
                    city: "Wayne",
                    state:"NJ",
                    zip: "07470"
        },
        insurance:["aetna", "blue cross", "humana", "united healthcare"]
    }
]

export default sample_providers;