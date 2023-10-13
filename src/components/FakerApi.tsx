import img1 from '../images/1.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
import img4 from '../images/4.png';
import img5 from '../images/5.png';

interface Trend {
    img: string;
    desc: string;
}

interface Suggestion {
    tag: String;
}

interface Product {
    img: string;
    title: string;
    prevPrice: number;
    currPrice: number;
    ratings: number;
    noOfRatings: number;
    brand: string;
    cart: boolean;
}

const LatestTrends: Trend[] = [
    {
        img: img1,
        desc: "Start with puffed sleeves",
    },
    {
        img: img2,
        desc: "Linen jumpsuit",
    },
    {
        img: img3,
        desc: "White formal suit",
    },
    {
        img: img4,
        desc: "Pattern dresses",
    },
    {
        img: img5,
        desc: "Leather shirt dress",
    },
];

const PopularSuggestions: Suggestion[] = [{tag: "Striped shirt dress"},{tag: "Satin shirts"},{tag: "Denim jumpsuit"}, {tag: "Leather dresses"}, {tag: "Solid tshirts"}];

const Data: Product[] = [
    {
        img: img1,
        title: "Round Neck Cotton Tee",
        prevPrice: 599,
        currPrice: 549,
        ratings: 5,
        noOfRatings: 210,
        brand: "H&M",
        cart: false,
    },
    {
        img: img2,
        title: "High waist trousers",
        prevPrice: 999,
        currPrice: 749,
        ratings: 5,
        noOfRatings: 210,
        brand: "Mango",
        cart: false,
    },
    {
        img: img3,
        title: "High neck pullover",
        prevPrice: 899,
        currPrice: 849,
        ratings: 5,
        noOfRatings: 210,
        brand: "H&M",
        cart: false,
    },
    {
        img: img4,
        title: "Satin Jumpsuit",
        prevPrice: 650,
        currPrice: 549,
        ratings: 5,
        noOfRatings: 210,
        brand: "Mango",
        cart: false,
    },
    {
        img: img1,
        title: "Round Neck Cotton Tee",
        prevPrice: 599,
        currPrice: 549,
        ratings: 5,
        noOfRatings: 210,
        brand: "H&M",
        cart: false,
    },
    {
        img: img2,
        title: "High waist trousers",
        prevPrice: 999,
        currPrice: 749,
        ratings: 5,
        noOfRatings: 210,
        brand: "Mango",
        cart: false,
    },
    {
        img: img3,
        title: "High neck pullover",
        prevPrice: 899,
        currPrice: 849,
        ratings: 5,
        noOfRatings: 210,
        brand: "H&M",
        cart: false,
    },
    {
        img: img4,
        title: "Satin Jumpsuit",
        prevPrice: 650,
        currPrice: 549,
        ratings: 5,
        noOfRatings: 210,
        brand: "Mango",
        cart: false,
    },
    
];

export { LatestTrends, PopularSuggestions, Data };
