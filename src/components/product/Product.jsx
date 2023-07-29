import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { devices } from "../../utils/constants";

const Main = styled.main`
  margin-top: 65px;
  margin-bottom: 49px;
  @media screen and ${devices.lg} {
    margin-top: 0;
    margin-bottom: 32px;
  }
`;

const ProductOptionsContainer = styled.div`
  display: flex;
  max-width: 960px;
  margin: 0 auto 50.33px;
  column-gap: 40px;
  @media screen and ${devices.lg} {
    flex-direction: column;
    margin-bottom: 28px;
    max-width: unset;
  }
`;

const ProductPicture = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "product image",
}))`
  width: 560px;
  height: 746.67px;
  vertical-align: bottom;
  @media screen and ${devices.lg} {
    width: 100%;
    height: initial;
    object-fit: cover;
  }
`;

const ProductInfoContainer = styled.div`
  @media screen and ${devices.lg} {
    padding: 0 24px;
    margin-top: 17px;
  }
`;

const ProductTitleContainer = styled.div`
  border-bottom: 1px solid #3f3a3a;
  margin-bottom: 36px;
`;

const ProductTitle = styled.h1`
  font-size: 32px;
  line-height: 38px;
  letter-spacing: 6.4px;
  color: #3f3a3a;
  margin-bottom: 16px;
  @media screen and ${devices.lg} {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 4px;
    margin-bottom: 10px;
  }
`;

const ProductNumber = styled.span`
  display: block;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 4px;
  color: #bababa;
  margin-bottom: 40px;
  @media screen and ${devices.lg} {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 3.2px;
    margin-bottom: 20px;
  }
`;

const ProductPrice = styled.span`
  display: block;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  color: #3f3a3a;
  margin-bottom: 20px;
  @media screen and ${devices.lg} {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 10px;
  }
`;

const ProductPreferenceContainer = styled.div`
  margin-bottom: 40px;
  @media screen and ${devices.lg} {
    margin-bottom: 28px;
  }
`;

const ColorContainer = styled.div`
  display: flex;
  column-gap: 30px;
  margin-bottom: 34px;
  align-items: center;
  @media screen and ${devices.lg} {
    column-gap: 22px;
  }
`;

const ColorText = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 4px;
  color: #3f3a3a;
  @media screen and ${devices.lg} {
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 2.8px;
  }
`;

const Colors = styled.div`
  display: flex;
  column-gap: 27px;
  &:hover {
    cursor: pointer;
  }
`;

const Color = styled.span`
  display: block;
  width: 24px;
  height: 24px;
  border: 1px solid #d3d3d3;
  outline-offset: 6px;
  background-color: #${(props) => props.colorcode};
  outline: ${(props) => (props.$primary ? "1px solid #979797" : "none")};
`;

const SizeContainer = styled.div`
  display: flex;
  column-gap: 24px;
  margin-bottom: 22px;
  align-items: center;
  @media screen and ${devices.lg} {
    margin-bottom: 30px;
    column-gap: 16px;
  }
`;

const SizeText = styled.span`
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 4px;
  color: #3f3a3a;
  @media screen and ${devices.lg} {
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 2.8px;
  }
`;

const Sizes = styled.div`
  display: flex;
  column-gap: 15px;
`;

const Size = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  font-size: 20px;
  line-height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.$primary
      ? "#000"
      : props.$available
      ? "#ECECEC"
      : "rgba(236, 236, 236, 0.25)"};
  color: ${(props) =>
    props.$primary
      ? "#fff"
      : props.$available
      ? "#3f3a3a"
      : "rgba(63, 58, 58, 0.25)"};
  &:hover {
    cursor: pointer;
  }
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 24px;
  margin-bottom: 26px;
  @media screen and ${devices.lg} {
    margin-bottom: 10px;
  }
`;

const QuantityText = styled.span`
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 4px;
  color: #3f3a3a;
  @media screen and ${devices.lg} {
    display: none;
  }
`;

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border: 1px solid #979797;
  width: 160px;
  height: 44px;
  padding: 0 15px;
  @media screen and ${devices.lg} {
    width: 100%;
    padding: 0 11.21759259%;
  }
`;

const Decrement = styled.span`
  font-size: 16px;
  line-height: 32px;
  color: #000000;
  &:hover {
    cursor: pointer;
  }
`;

const CounterResult = styled.span`
  font-size: 16px;
  line-height: 32px;
  color: #8b572a;
  @media screen and ${devices.lg} {
    font-size: 20px;
    line-height: 22px;
  }
`;

const Increment = styled.span`
  font-size: 16px;
  line-height: 32px;
  color: #000000;
  &:hover {
    cursor: pointer;
  }
`;

const CartButton = styled.button`
  display: block;
  background: #000000;
  border: 1px solid #979797;
  padding: 17px 0;
  width: 360px;
  height: 64px;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 4px;
  color: #ffffff;
  cursor: pointer;
  @media screen and ${devices.lg} {
    width: 100%;
    padding: 7px 0;
    height: 44px;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 3.2px;
  }
`;

const ProductDetailsContainer = styled.div`
  padding-left: 6px;
  @media screen and ${devices.lg} {
    padding-left: 0;
  }
`;

const ProductText = styled.span`
  font-size: 20px;
  line-height: 30px;
  color: #3f3a3a;
  display: block;
  margin-bottom: 30px;
  @media screen and ${devices.lg} {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 24px;
  }
`;

const ProductMaterialContainer = styled.div`
  margin-bottom: 30px;
  @media screen and ${devices.lg} {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 24px;
  }
`;

const ProductMaterialText = styled.span`
  font-size: 20px;
  line-height: 30px;
  color: #3f3a3a;
  display: block;
  @media screen and ${devices.lg} {
    font-size: 14px;
    line-height: 24px;
  }
`;

const ProductMaterialThickness = styled.span`
  font-size: 20px;
  line-height: 30px;
  color: #3f3a3a;
  display: block;
  @media screen and ${devices.lg} {
    font-size: 14px;
    line-height: 24px;
  }
`;

const ProductMaterialFlexibility = styled.span`
  font-size: 20px;
  line-height: 30px;
  color: #3f3a3a;
  display: block;
  @media screen and ${devices.lg} {
    font-size: 14px;
    line-height: 24px;
  }
`;

const ProductMethodPlaceContainer = styled.div``;

const ProductCleanMethod = styled.span`
  font-size: 20px;
  line-height: 30px;
  color: #3f3a3a;
  display: block;
  @media screen and ${devices.lg} {
    font-size: 14px;
    line-height: 24px;
  }
`;

const ProductPlaceOfOrigin = styled.span`
  font-size: 20px;
  line-height: 30px;
  color: #3f3a3a;
  display: block;
  @media screen and ${devices.lg} {
    font-size: 14px;
    line-height: 24px;
  }
`;

const AsideContainer = styled.aside`
  margin: 0 auto;
  max-width: 960px;
  @media screen and ${devices.lg} {
    max-width: unset;
    width: 100%;
    padding: 0 24px;
  }
`;

const AsideInfoContainer = styled.div`
  margin-bottom: 30px;
  @media screen and ${devices.lg} {
    margin-bottom: 20px;
  }
`;

const MoreInfoContainer = styled.div`
  display: flex;
  column-gap: 64px;
  align-items: center;
  margin-bottom: 28px;
  @media screen and ${devices.lg} {
    column-gap: 35px;
    margin-bottom: 12px;
  }
`;

const MoreInfoTitle = styled.h2`
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 3px;
  color: #8b572a;
  white-space: nowrap;
  @media screen and ${devices.lg} {
    font-size: 16px;
    letter-spacing: 3.2px;
  }
`;

const MoreInfoSeparator = styled.span`
  width: 761px;
  border: 1px solid #3f3a3a;
  @media screen and ${devices.lg} {
    width: 100%;
  }
`;

const MoreInfoParagraph = styled.p`
  font-size: 20px;
  line-height: 30px;
  color: #3f3a3a;
  @media screen and ${devices.lg} {
    font-size: 14px;
    line-height: 25px;
  }
`;

const AsideImageContainer = styled.div``;

const AsideImage = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "supplmentary image",
}))`
  margin-bottom: 30px;
  @media screen and ${devices.lg} {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const Product = ({ onCart, onSetCart }) => {
  const [prod, setProd] = useState([]);
  const [colorCode, setColorCode] = useState("");
  const [colorName, setColorName] = useState("");
  const [sizeCode, setSizeCode] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [variants, setVariants] = useState("");
  const hostName = "api.appworks-school.tw";
  const APIVersion = "1.0";

  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");

  const cart = onCart;

  const getCartTotal = (sizeCode, cart) => {
    const requiredCartData = cart.filter(
      (cart) =>
        cart.prodId === prod.id &&
        cart.prodColor === colorCode &&
        cart.prodSize === sizeCode
    );
    const requiredProductQuantity = requiredCartData.reduce(
      (accumulator, prodObject) => accumulator + prodObject.prodQuantity,
      0
    );

    return requiredProductQuantity;
  };

  const fetchProdData = async () => {
    const response = await fetch(
      `https://${hostName}/api/${APIVersion}/products/details?id=${id}`
    );
    const jsonData = await response.json();
    const data = await jsonData.data;
    setProd(data);
    setVariants(data.variants);
  };

  useEffect(() => {
    fetchProdData();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(onCart));
  }, [onCart]);

  const selectColor = (colorCode, colorName) => {
    setColorCode(colorCode);
    setColorName(colorName);
    setVariants(
      prod.variants.filter((variant) => variant["color_code"] === colorCode)
    );
    setSizeCode("");
    setQuantity(1);
  };

  const checkAvailable = (size) => {
    if (colorCode) {
      const requiredProductQuantity = getCartTotal(size, cart);
      const stock = variants.filter((variant) => variant.size === size)[0]
        .stock;
      const remainingStock = stock - requiredProductQuantity;

      return colorCode && remainingStock !== 0;
    } else {
      return false;
    }
  };

  const selectSize = (size) => {
    const requiredProductQuantity = getCartTotal(size, cart);
    const stock = variants.filter((variant) => variant.size === size)[0].stock;
    const remainingStock = stock - requiredProductQuantity;

    if (colorCode && remainingStock !== 0) {
      setSizeCode(size);
      setQuantity(1);
    }
  };

  const decrementCount = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(1);
    }
  };

  const incrementCount = () => {
    const requiredProductQuantity = getCartTotal(sizeCode, cart);
    const requiredArray = prod.variants.filter(
      (variant) =>
        variant["color_code"] === colorCode && variant["size"] === sizeCode
    );
    const stock = requiredArray[0].stock;
    const remainingStock = stock - requiredProductQuantity;

    if (
      colorCode &&
      sizeCode &&
      quantity < remainingStock &&
      remainingStock > 0
    ) {
      setQuantity(quantity + 1);
    } else {
      setQuantity(remainingStock);
    }
  };

  const addToCart = () => {
    const requiredProductQuantity = getCartTotal(sizeCode, cart);
    const requiredArray = prod.variants.filter(
      (variant) =>
        variant["color_code"] === colorCode && variant["size"] === sizeCode
    );
    const stock = requiredArray[0].stock;

    let newProductInfo = {
      prodImage: prod.main_image,
      prodTitle: prod.title,
      prodId: prod.id,
      prodColor: colorCode,
      prodColorName: colorName,
      prodSize: sizeCode,
      prodQuantity: quantity,
      prodPrice: prod.price,
      prodStock: stock,
    };

    const remainingStock = stock - requiredProductQuantity;

    if (colorCode && sizeCode && remainingStock > 0) {
      let immediateRequireProductQuantity;
      if (!cart.length) {
        onSetCart((prev) => [...prev, newProductInfo]);
        immediateRequireProductQuantity = getCartTotal(sizeCode, [
          ...cart,
          newProductInfo,
        ]);
      } else {
        let alreadyFound = false;
        const newCart = cart.map((item) => {
          if (
            item.prodId === prod.id &&
            item.prodColor === colorCode &&
            item.prodSize === sizeCode
          ) {
            alreadyFound = true;
            item.prodQuantity = item.prodQuantity + quantity;
            return item;
          } else {
            return item;
          }
        });

        if (!alreadyFound) {
          newCart.push(newProductInfo);
        }
        onSetCart(newCart);
        immediateRequireProductQuantity = getCartTotal(sizeCode, newCart);
      }

      setQuantity(1);

      if (stock - immediateRequireProductQuantity === 0) {
        setSizeCode("");
      }
    }
  };

  return (
    <Main>
      <ProductOptionsContainer>
        <ProductPicture src={prod?.main_image} />
        <ProductInfoContainer>
          <ProductTitleContainer>
            <ProductTitle>{prod?.title}</ProductTitle>
            <ProductNumber>{prod?.id}</ProductNumber>
            <ProductPrice>TWD.{prod?.price}</ProductPrice>
          </ProductTitleContainer>
          <ProductPreferenceContainer>
            <ColorContainer>
              <ColorText>顏色 | </ColorText>
              <Colors>
                {prod &&
                  prod.colors?.map((color, index) => (
                    <Color
                      key={index}
                      colorcode={color.code}
                      $primary={colorCode === color.code}
                      onClick={() => {
                        selectColor(color.code, color.name);
                      }}
                    />
                  ))}
              </Colors>
            </ColorContainer>
            <SizeContainer>
              <SizeText>尺寸 | </SizeText>
              <Sizes>
                {prod &&
                  prod.sizes?.map((size, index) => (
                    <Size
                      key={index}
                      $primary={sizeCode === size}
                      $available={checkAvailable(size)}
                      onClick={() => {
                        selectSize(size);
                      }}
                    >
                      {size}
                    </Size>
                  ))}
              </Sizes>
            </SizeContainer>
            <QuantityContainer>
              <QuantityText>數量 | </QuantityText>
              <CounterContainer>
                <Decrement onClick={decrementCount}>-</Decrement>
                <CounterResult>{quantity}</CounterResult>
                <Increment onClick={incrementCount}>+</Increment>
              </CounterContainer>
            </QuantityContainer>
            <CartButton onClick={addToCart}>加入購物車</CartButton>
          </ProductPreferenceContainer>
          <ProductDetailsContainer>
            <ProductText>{prod?.note}</ProductText>
            <ProductMaterialContainer>
              <ProductMaterialText>{prod?.texture}</ProductMaterialText>
              <ProductMaterialThickness>
                {prod && prod.description?.split("\r\n")[0]}
              </ProductMaterialThickness>
              <ProductMaterialFlexibility>
                {prod && prod.description?.split("\r\n")[1]}
              </ProductMaterialFlexibility>
            </ProductMaterialContainer>
            <ProductMethodPlaceContainer>
              <ProductCleanMethod>清洗：{prod?.wash}</ProductCleanMethod>
              <ProductPlaceOfOrigin>產地：{prod?.place}</ProductPlaceOfOrigin>
            </ProductMethodPlaceContainer>
          </ProductDetailsContainer>
        </ProductInfoContainer>
      </ProductOptionsContainer>
      <AsideContainer>
        <AsideInfoContainer>
          <MoreInfoContainer>
            <MoreInfoTitle>更多產品資訊</MoreInfoTitle>
            <MoreInfoSeparator />
          </MoreInfoContainer>
          <MoreInfoParagraph>{prod?.story}</MoreInfoParagraph>
        </AsideInfoContainer>
        <AsideImageContainer>
          {prod &&
            prod.images?.map((image, index) => (
              <AsideImage key={index} src={image} />
            ))}
        </AsideImageContainer>
      </AsideContainer>
    </Main>
  );
};

export default Product;
