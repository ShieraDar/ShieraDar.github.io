<template>
    <div class="product">
        <div class="title">Product</div>
        <div class="content">
            <div class="product-detail" v-for="(item, index) in allProd" :key="index">
                <img :src="getPath(item.pic)" :alt="item.name">
                <div class="prod-name">
                    {{item.name}}
                </div>
                <table>
                    <tr v-for="(data, index1) in item.detailTitle" :key="index1">
                        <th>
                            • {{item.detailTitle[index1]}}
                        </th>
                        <td>
                            {{item.detailContent[index1]}}
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script src="./product.js"></script>
<style scoped src="./style.scss"></style>