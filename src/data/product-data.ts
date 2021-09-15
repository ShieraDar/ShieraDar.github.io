import { Product } from "../model/product-model";

export class ProductData{
    public static getData(): Product[]{
        return [
            {
                pic: "wiring cable duct.png",
                name: "Wiring Cable Duct (Slotted/Solid)",
                detailTitle: [
                    "Material",
                    "Length",
                    "Color",
                ],
                detailContent: [
                    "High impact, self-extinguishing, waterproof P.V.C (Polyvinyl Chloride)",
                    "1.7 M (Available on request)",
                    "Gray / White"
                ]
            },
            {
                pic: "telephone cable.png",
                name: "Telephone Cable Ducting (TC)",
                detailTitle: [
                    "Material",
                    "Length",
                    "Application",
                    "Color"
                ],
                detailContent: [
                    "Rigid, Self-extinguishing P.V.C Backed with high quality self-adhesive tape to facilitate wire application",
                    "1M (Available on request)",
                    "Designed to protect wire on floor",
                    "Gray / White"
                ]
            },
            {
                pic: "floor duct.png",
                name: "Floor Duct (Curva)",
                detailTitle: [
                    "Material",
                    "Length",
                    "Application",
                    "Color"
                ],
                detailContent: [
                    "Rigid, Self-extinguishing P.V.C Backed with high quality self-adhesive tape to facilitate wire application",
                    "1M (Available on request)",
                    "Designed to protect wire on floor",
                    "Gray / White"
                ]
            },
            {
                pic: "pvc wiring duct.png",
                name: "PVC Decoration Wiring Duct",
                detailTitle: [
                    "Material",
                    "Length",
                    "Color"
                ],
                detailContent: [
                    "High impact, self-extinguishing, waterproof P.V.C (Polyvinyl Chloride)",
                    "1.7 M (Available on request)",
                    "Gray / White"
                ]
            },
            {
                pic: "upvc hose.png",
                name: "uPVC Corrugated Flexible Hose",
                detailTitle: [
                    "Size",
                    "Length",
                    "Color"
                ],
                detailContent: [
                    "10 mm, 13 mm, 15 mm, 19 mm, 25 mm",
                    "35 M / 40 M",
                    "Black / White"
                ]
            },
            {
                pic: "flexible metal hose.png",
                name: "Flexible Metal Hose",
                detailTitle: [
                    "Material",
                    "Length",
                    "Application"
                ],
                detailContent: [
                    "Galvanized Steel Unlined Flexible Metal Duct Hose",
                    "3/8\"-4\"",
                    "High mechanical strength, Highly flexible. Temperature range: -100℃ to +300℃"
                ]
            },
            {
                pic: "transformer.png",
                name: "Transformer TAKASHIBA",
                detailTitle: [
                    "Type",
                    "Phase",
                    "On Request"
                ],
                detailContent: [
                    "Open type for industrial machinery (Multi-step Ac-Ac)",
                    "1 & 3 phase",
                    "Voltage (input-output)"
                ]
            },
            {
                pic: "cable clip.png",
                name: "Cable Clip Nail AKIRA",
                detailTitle: [
                    "Material",
                    "Size"
                ],
                detailContent: [
                    "Premium stabilized plastic and hardened Hardened Steel Concrete Nail (paku beton). Acid resistance, corrosion resistance, strong bearing capacity.",
                    "No. 4 - 17"
                ]
            },
            {
                pic: "pipa conduit.png",
                name: "Conduit Pipe",
                detailTitle: [

                ],
                detailContent: [

                ],
            },
            {
                pic: "conduit fitting.png",
                name: "Conduit Fittings",
                detailTitle: [

                ],
                detailContent: [

                ],
            },
            {
                pic: "terminal.png",
                name: "Terminal",
                detailTitle: [

                ],
                detailContent: [

                ],
            },
        ];
    };
}