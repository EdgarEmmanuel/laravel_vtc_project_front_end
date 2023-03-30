import './css/CardImage.css';


const CardImage = () => {
    return (
        <div class="CardImagecontainer">
            <div class="CardImagecard">
                <div class="CardImagecard-inner">
                    <div class="CardImagefront">
                        <img src="https://i.ibb.co/PYss3yv/map.png" class="CardImagemap-img" alt="" />
                        <div class="CardImagerow">
                            <img src="https://i.ibb.co/G9pDnYJ/chip.png" width="60px" alt="" />
                            <img src="https://i.ibb.co/WHZ3nRJ/visa.png" width="60px" alt="" />
                        </div>
                        <div class="CardImagerow CardImagecard-no">
                            <p>5244</p>
                            <p>2150</p>
                            <p>8252</p>
                            <p>6420</p>
                        </div>
                        <div class="CardImagerow CardImagecard-holder">
                            <p>CARD HOLDER</p>
                            <p>VALID TILL</p>
                        </div>
                        <div class="CardImagerow CardImagename">
                            <p>JOE ALISON</p>
                            <p>10 / 25</p>
                        </div>
                    </div>
                    <div class="CardImageback">
                        <img src="https://i.ibb.co/PYss3yv/map.png" alt="" class="CardImagemap-img"/>
                        <div class="bar"></div>
                        <div class="row card-cvv">
                            <div>
                                <img src="https://i.ibb.co/S6JG8px/pattern.png" alt=""/>
                            </div>
                            <p>824</p>
                        </div>
                        <div class="CardImagerow CardImagecard-text">
                            <p>this is a virtual card design using HTML and CSS. You can aslo design something like this.</p>
                        </div>
                        <div class="CardImagerow CardImagesignature">
                            <p>CUSTOMER SIGNATURE</p>
                            <img src="https://i.ibb.co/WHZ3nRJ/visa.png" alt="" width="80px"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CardImage ;