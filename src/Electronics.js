import React from 'react'
import ElecList from './ElecList'
import './Electronics.css'
import 'antd/dist/antd.css';
import { Breadcrumb } from 'antd';

function Electronics() {
    return (
        <div className="elec">
            <div className="bread">
            <Breadcrumb>
            <Breadcrumb.Item>
            <a href="/home">Home</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
            <a href="/electronics">Mobiles</a>
            </Breadcrumb.Item>
            </Breadcrumb>
            </div>
            <div className="top">
                <img src="https://promotions.newegg.com/sony/20-1957/v2/1920x360@2x.jpg" alt=""/>
            </div>

            <div className="main">
                <ElecList
                            id="1"
                            image="https://images.samsung.com/us/smartphones/galaxy-note20/pdp/gallery/canvas1/Bronze/Gallery-01-C1-Lockup-MysticBronze-1600x1200.jpg?$product-details-jpg$"
                            title="Samsung Galaxy Note20"
                            description="Ultra 5G SM-N986UZKAXAA 5G Unlocked Cell Phone 6.9 Mystic Black 128GB 12GB RAM"
                            rating={5}
                            price={110000}
                />

                <ElecList
                            id="2"
                            image="https://c1.neweggimages.com/ProductImageCompressAll1280/75-169-957-V01.jpg"
                            title="Samsung Galaxy S9+"
                            description="SM5G965UZKAXAA 4G LTE Certified Pre-Owned, 12 Month US Warranty (Renewed) 6.2 Black 64GB 6GB RAM"
                            rating={4}
                            price={110000}
                />
                
                 <ElecList
                            id="3"
                            image="https://c1.neweggimages.com/ProductImageCompressAll1280/ACYNS200804ByTuK.jpg"
                            title="Apple iPhone 11 Pro Max "
                            description=" 64GB Space Gray LTE Cellular T-Mobile MWFN2LL/A"
                            rating={5}
                            price={99900}
                />

            </div>

            <div className="main">
                <ElecList
                            id="1"
                            image="https://c1.neweggimages.com/ProductImageCompressAll1280/75-169-964-S07.jpg"
                            title="Samsung Galaxy Note20"
                            description="Ultra 5G SM-N986UZKAXAA 5G Unlocked Cell Phone 6.9 Mystic Black 128GB 12GB RAM"
                            rating={5}
                            price={110000}
                />

                <ElecList
                            id="2"
                            image="https://c1.neweggimages.com/ProductImageCompressAll1280/75-169-957-V01.jpg"
                            title="Samsung Galaxy S9+"
                            description="SM5G965UZKAXAA 4G LTE Certified Pre-Owned, 12 Month US Warranty (Renewed) 6.2 Black 64GB 6GB RAM"
                            rating={4}
                            price={110000}
                />
                
                 <ElecList
                            id="3"
                            image="https://c1.neweggimages.com/ProductImageCompressAll1280/ACYNS200804ByTuK.jpg"
                            title="Apple iPhone 11 Pro Max "
                            description=" 64GB Space Gray LTE Cellular T-Mobile MWFN2LL/A"
                            rating={5}
                            price={99900}
                />

            </div>

            <div className="main">
                <ElecList
                            id="1"
                            image="https://c1.neweggimages.com/ProductImageCompressAll1280/75-169-964-S07.jpg"
                            title="Samsung Galaxy Note20"
                            description="Ultra 5G SM-N986UZKAXAA 5G Unlocked Cell Phone 6.9 Mystic Black 128GB 12GB RAM"
                            rating={5}
                            price={110000}
                />

                <ElecList
                            id="2"
                            image="https://c1.neweggimages.com/ProductImageCompressAll1280/75-169-957-V01.jpg"
                            title="Samsung Galaxy S9+"
                            description="SM5G965UZKAXAA 4G LTE Certified Pre-Owned, 12 Month US Warranty (Renewed) 6.2 Black 64GB 6GB RAM"
                            rating={4}
                            price={110000}
                />
                
                 <ElecList
                            id="3"
                            image="https://c1.neweggimages.com/ProductImageCompressAll1280/ACYNS200804ByTuK.jpg"
                            title="Apple iPhone 11 Pro Max "
                            description=" 64GB Space Gray LTE Cellular T-Mobile MWFN2LL/A"
                            rating={5}
                            price={99900}
                />

            </div>
            

            <div className="block">

            </div>


        </div>
    )
}

export default Electronics
