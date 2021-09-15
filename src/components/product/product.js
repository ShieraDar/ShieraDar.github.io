import { ProductData } from '../../data/product-data'
export default {
    name: 'Product',
    data(){
        return {
            allProd: ProductData.getData(),
        }
    },
    methods: {
        getPath(name){
            let path = 'src/assets/Product/' + name;
            console.log(path);
            return path;
        }
    },
    mounted() {
        // this.getAllImage()
    }
}