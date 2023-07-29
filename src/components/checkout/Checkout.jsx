import { useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Trash from "../../assets/images/trash.png";
import { devices } from "../../utils/constants";

const Main = styled.main`
  margin: 51px auto 148px;
  width: 1160px;
  @media all and ${devices.lg} {
    width: 100%;
    padding: 0 24px;
    margin: 20px auto 28px;
  }
`;

const CartContainer = styled.div`
  margin-bottom: 46px;
  @media screen and ${devices.lg} {
    margin-bottom: 16px;
  }
`;

const CartHeader = styled.header`
  display: flex;
  margin-bottom: 16px;
  @media screen and ${devices.lg} {
    border-bottom: 1px solid #3f3a3a;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
`;

const CartTextTitle = styled.h1`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #3f3a3a;
  margin-right: 490px;
  @media screen and ${devices.lg} {
    white-space: nowrap;
  }
`;

const CartQtyPriceTotalContainer = styled.div`
  display: flex;
  column-gap: 160px;
  @media screen and ${devices.lg} {
    display: none;
  }
`;

const CartQuantityTitle = styled.span`
  font-size: 16px;
  line-height: 19px;
  color: #3f3a3a;
`;

const CartUnitPriceTitle = styled.span`
  font-size: 16px;
  line-height: 19px;
  color: #3f3a3a;
`;

const CartTotalAmountTitle = styled.span`
  font-size: 16px;
  line-height: 16px;
  color: #3f3a3a;
`;

const CartDetailContainer = styled.div`
  border: 1px solid #979797;
  padding: 40px 30px 38px;
  @media screen and ${devices.lg} {
    border: none;
    padding: 0;
  }
`;

const CartDetails = styled.div`
  display: flex;
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
  }
  @media all and ${devices.lg} {
    column-gap: 0;
    flex-direction: column;
    border-bottom: 1px solid #000000;
    padding-bottom: 18px;
    position: relative;
    margin-bottom: 20px;
    &:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }
`;

const CartProductContainer = styled.div`
  display: flex;
  column-gap: 16px;
  margin-right: auto;
  @media screen and ${devices.lg} {
    margin-right: 0;
    column-gap: 10px;
    margin-bottom: 20px;
  }
`;

const CartProductImage = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "cart product image",
}))`
  width: 114px;
  height: 152px;
  object-fit: cover;
`;

const CartProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartProductTitle = styled.span`
  font-size: 16px;
  line-height: 19px;
  color: #3f3a3a;
  margin-bottom: 18px;
  white-space: nowrap;
  @media screen and ${devices.lg} {
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 20px;
  }
`;

const CartProductId = styled.span`
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  margin-bottom: 22px;
  @media screen and ${devices.lg} {
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 24px;
  }
`;

const CartProductColor = styled.span`
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  margin-bottom: 10px;
  @media screen and ${devices.lg} {
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 12px;
  }
`;

const CartProductSize = styled.span`
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  @media screen and ${devices.lg} {
    font-size: 14px;
    line-height: 17px;
  }
`;

const CartProductQtyPriceTotalContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and ${devices.lg} {
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const CartProductQuantityDropDownContainer = styled.div`
  margin-right: 56px;
  @media screen and ${devices.lg} {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10.5px;
    /* margin-right: 40px; */
    margin-right: 0;
  }
`;

const CartProductQuantityDropDownText = styled.span`
  display: none;
  @media screen and ${devices.lg} {
    display: initial;
    width: 104px;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #3f3a3a;
  }
`;

const CartProductQuantityDropDown = styled.select`
  width: 80px;
  padding-left: 16px;
  background: #f3f3f3;
  border: 1px solid #979797;
  border-radius: 8px;
  /* margin-right: 56px; */
  height: 32px;
`;

const CartProductQuantityMenu = styled.option`
  font-size: 14px;
  line-height: 16px;
  color: #3f3a3a;
`;

const CartProductUnitPriceContainer = styled.div`
  width: 192px;
  text-align: center;
  @media screen and ${devices.lg} {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 18px;
    width: initial;
    &:nth-child(3) {
      margin-right: 0;
    }
  }
`;

const CartProductUnitPriceText = styled.span`
  display: none;
  @media screen and ${devices.lg} {
    display: initial;
    width: 104px;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #3f3a3a;
  }
`;

const CartProductUnitPrice = styled.span`
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #3f3a3a;
  width: 192px;
  @media screen and ${devices.lg} {
    width: initial;
    font-size: 14px;
    line-height: 17px;
  }
`;

const CartTrashImage = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "trash",
}))`
  margin-left: 52px;
  cursor: pointer;
  @media screen and ${devices.lg} {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

const PersonalInfoForm = styled.form``;

const PersonalInfoContainer = styled.div`
  margin-bottom: 46px;
  @media screen and ${devices.lg} {
    margin-bottom: 17px;
  }
`;

const PersonalInfoHeader = styled.header`
  border-bottom: 1px solid #3f3a3a;
  margin-bottom: 25px;
  padding-bottom: 14px;
  @media screen and ${devices.lg} {
    padding-bottom: 7px;
    margin-bottom: 20px;
  }
`;

const PersonalInfoTextTitle = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #3f3a3a;
`;

const PersonalInfoNameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  @media screen and ${devices.lg} {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 6px;
  }
`;

const PersonalInfoNameLabel = styled.label`
  font-size: 16px;
  line-height: 19px;
  color: #3f3a3a;
  width: 120px;
  @media screen and ${devices.lg} {
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 10px;
  }
`;

const PersonalInfoNameInput = styled.input`
  width: 576px;
  height: 32px;
  border: 1px solid #979797;
  border-radius: 8px;
  font-size: 16px;
  padding-left: 5px;
  @media screen and ${devices.lg} {
    width: 100%;
    font-size: 14px;
  }
`;

const PersonalInfoNameReminderContainer = styled.div`
  padding-left: 344px;
  margin-bottom: 28px;
  @media screen and ${devices.lg} {
    padding-left: 0;
    margin-bottom: 20px;
  }
`;

const PersonalInfoNameReminder = styled.span`
  font-size: 16px;
  line-height: 19px;
  color: #8b572a;
  @media screen and ${devices.lg} {
    font-size: 14px;
    line-height: 17px;
    display: block;
  }
`;

const PersonalInfoLabelContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  @media screen and ${devices.lg} {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
  }
`;

const PersonalInfoLabel = styled.label`
  font-size: 16px;
  line-height: 19px;
  color: #3f3a3a;
  width: 120px;
  @media screen and ${devices.lg} {
    width: initial;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 10px;
  }
`;

const PersonalInfoDeliveryTimeContainer = styled.div`
  display: flex;
`;

const PersonalInfoInput = styled.input`
  width: 576px;
  height: 32px;
  border: 1px solid #979797;
  border-radius: 8px;
  font-size: 16px;
  padding-left: 5px;
  @media screen and ${devices.lg} {
    width: 100%;
    font-size: 14px;
  }
`;

const PersonalInfoDeliveryLabelContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and ${devices.lg} {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 10px;
  }
`;

const PersonalInfoDeliveryLabel = styled.label`
  margin-right: 32px;
  font-size: 16px;
  line-height: 26px;
  color: #3f3a3a;
  display: flex;
  align-items: center;
  &:last-child {
    margin-right: 0;
  }
  @media screen and ${devices.lg} {
    font-size: 14px;
    margin-right: 26px;
  }
`;

const PersonalInfoDeliveryInput = styled.input`
  margin-right: 8px;
  width: 16px;
  height: 16px;
  @media screen and ${devices.lg} {
    margin-right: 6px;
  }
`;

const PaymentContainer = styled.div`
  margin-bottom: 40px;
  @media screen and ${devices.lg} {
    margin-bottom: 24px;
  }
`;

const PaymentHeader = styled.header`
  padding-bottom: 13px;
  border-bottom: 1px solid #3f3a3a;
  margin-bottom: 25px;
  @media screen and ${devices.lg} {
    padding-bottom: 8px;
    margin-bottom: 20px;
  }
`;

const PaymentTextTitle = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #3f3a3a;
`;

const PaymentLabelContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  @media screen and ${devices.lg} {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 10px;
    margin-bottom: 20px;
  }
`;

const PaymentLabel = styled.label`
  font-size: 16px;
  line-height: 19px;
  color: #3f3a3a;
  width: 120px;
  @media screen and ${devices.lg} {
    font-size: 14px;
    line-height: 17px;
  }
`;

const PaymentInput = styled.input`
  width: 576px;
  height: 32px;
  border: 1px solid #979797;
  border-radius: 8px;
  padding-left: 8px;
  &::placeholder {
    font-size: 16px;
    line-height: 32px;
    color: #d3d3d3;
  }
  @media screen and ${devices.lg} {
    width: 100%;
  }
`;

const TpField = styled.div`
  height: 40px;
  width: 300px;
  border: 1px solid gray;
  margin: 5px 0;
  padding: 5px;
`;

const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ConfirmationBox = styled.div``;

const ConfirmationTotalAmountContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 89px;
  margin-bottom: 20px;
`;

const ConfirmationTotalAmountText = styled.span`
  font-size: 16px;
  line-height: 19px;
  color: #3f3a3a;
  margin-right: auto;
`;

const ConfirmationTotalAmountNumberContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ConfirmationTotalAmountCurrency = styled.span`
  font-size: 16px;
  line-height: 19px;
  color: #3f3a3a;
  margin-right: 8px;
`;

const ConfirmationTotalAmountNumber = styled.span`
  font-size: 30px;
  line-height: 36px;
  color: #3f3a3a;
`;

const ConfirmationShippingFeeContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 140px;
  border-bottom: 1px solid #3f3a3a;
  padding-bottom: 20px;
  margin-bottom: 20px;
  @media screen and ${devices.lg} {
    padding-bottom: 18px;
  }
`;

const ConfirmationShippingFeeText = styled.span`
  font-size: 16px;
  line-height: 19px;
  color: #3f3a3a;
`;

const ConfirmationShippingFeeNumberContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ConfirmationShippingFeeCurrency = styled.span`
  font-size: 16px;
  line-height: 19px;
  color: #3f3a3a;
  margin-right: 8px;
`;

const ConfirmationShippingFeeNumber = styled.span`
  font-size: 30px;
  line-height: 36px;
  color: #3f3a3a;
`;

const ConfirmationAmountPayableContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 77px;
  margin-bottom: 50px;
  @media screen and ${devices.lg} {
    margin-bottom: 36px;
  }
`;

const ConfirmationAmountPayableText = styled.span`
  font-size: 16px;
  line-height: 19px;
  color: #3f3a3a;
  margin-right: auto;
  @media screen and ${devices.lg} {
  }
`;

const ConfirmationAmountPayableNumberContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ConfirmationAmountPayableCurrency = styled.span`
  font-size: 16px;
  line-height: 19px;
  color: #3f3a3a;
  margin-right: 8px;
`;

const ConfirmationAmountPayableNumber = styled.span`
  font-size: 30px;
  line-height: 36px;
  color: #3f3a3a;
`;

const ConfirmationButton = styled.button`
  background: #000000;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 4px;
  color: #ffffff;
  padding: 17px 0;
  text-align: center;
  width: 240px;
  cursor: pointer;
  @media screen and ${devices.lg} {
    width: 100%;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 3.2px;
    padding: 7px 0;
  }
`;

const ErrorMessage = styled.p`
  margin-left: 3px;
  color: red;
  @media screen and ${devices.lg} {
    font-size: 14px;
    margin-left: 0;
  }
`;

const Checkout = ({ onCart, onSetCart }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const cart = onCart;
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(onCart));
  }, [onCart]);

  const dropDownHandleChange = (event, item) => {
    const newProdQuantity = Number(event.target.value);
    const newCart = cart.map((cartItem) => {
      if (
        cartItem.prodId === item.prodId &&
        cartItem.prodColor === item.prodColor &&
        cartItem.prodSize === item.prodSize
      ) {
        cartItem.prodQuantity = newProdQuantity;
        return cartItem;
      } else {
        return cartItem;
      }
    });
    onSetCart(newCart);
  };

  const getDropDownMenu = (prodStock) => {
    return Array(prodStock)
      .fill(null)
      .map((menuArr, index) => (
        <CartProductQuantityMenu key={index}>
          {index + 1}
        </CartProductQuantityMenu>
      ));
  };

  const removeItem = (item) => {
    const updatedItems = cart.filter(
      (cartItem) =>
        cartItem.prodId !== item.prodId ||
        cartItem.prodColor !== item.prodColor ||
        cartItem.prodSize !== item.prodSize
    );
    onSetCart(updatedItems);
  };

  const calcTotalAmount = () => {
    const totalAmount = cart.reduce(
      (accumulator, currentObject) =>
        accumulator + currentObject.prodQuantity * currentObject.prodPrice,
      0
    );
    return totalAmount;
  };

  useEffect(() => {
    window.TPDirect.setupSDK(
      "12348",
      "app_pa1pQcKoY22IlnSXq5m5WP5jFKzoRG58VEXpT7wU62ud7mMbDOGzCYIlzzLFAPP_KEY",
      "sandbox"
    );

    window.TPDirect.card.setup({
      // Display ccv field

      fields: {
        number: {
          // css selector
          element: "#card-number",
          placeholder: "**** **** **** ****",
        },
        expirationDate: {
          // DOM object
          element: document.getElementById("card-expiration-date"),
          placeholder: "MM / YY",
        },
        ccv: {
          element: "#card-ccv",
          placeholder: "ccv",
        },
      },
      styles: {
        // Style all elements
        input: {
          color: "gray",
        },
        // Styling ccv field
        "input.ccv": {
          // 'font-size': '16px'
        },
        // Styling expiration-date field
        "input.expiration-date": {
          // 'font-size': '16px'
        },
        // Styling card-number field
        "input.card-number": {
          // 'font-size': '16px'
        },
        // style focus state
        ":focus": {
          // 'color': 'black'
        },
        // style valid state
        ".valid": {
          color: "green",
        },
        // style invalid state
        ".invalid": {
          color: "red",
        },
        // Media queries
        // Note that these apply to the iframe, not the root window.
        "@media screen and (max-width: 400px)": {
          input: {
            color: "orange",
          },
        },
      },
      // 此設定會顯示卡號輸入正確後，會顯示前六後四碼信用卡卡號
      isMaskCreditCardNumber: true,
      maskCreditCardNumberRange: {
        beginIndex: 6,
        endIndex: 11,
      },
    });

    // TPDirect.card.onUpdate(function (update) {
    //   // update.canGetPrime === true
    //   // --> you can call TPDirect.card.getPrime()
    //   if (update.canGetPrime) {
    //     // Enable submit Button to get prime.
    //     // submitButton.removeAttribute('disabled')
    //   } else {
    //     // Disable submit Button to get prime.
    //     // submitButton.setAttribute('disabled', true)
    //   }

    //   // cardTypes = ['mastercard', 'visa', 'jcb', 'amex', 'unionpay','unknown']
    //   if (update.cardType === "visa") {
    //     // Handle card type visa.
    //   }

    //   // number 欄位是錯誤的
    //   if (update.status.number === 2) {
    //     // setNumberFormGroupToError()
    //   } else if (update.status.number === 0) {
    //     // setNumberFormGroupToSuccess()
    //   } else {
    //     // setNumberFormGroupToNormal()
    //   }

    //   if (update.status.expiry === 2) {
    //     // setNumberFormGroupToError()
    //   } else if (update.status.expiry === 0) {
    //     // setNumberFormGroupToSuccess()
    //   } else {
    //     // setNumberFormGroupToNormal()
    //   }

    //   if (update.status.ccv === 2) {
    //     // setNumberFormGroupToError()
    //   } else if (update.status.ccv === 0) {
    //     // setNumberFormGroupToSuccess()
    //   } else {
    //     // setNumberFormGroupToNormal()
    //   }
    // });
  }, []);
  return (
    <Main>
      <CartContainer>
        <CartHeader>
          <CartTextTitle>購物車</CartTextTitle>
          <CartQtyPriceTotalContainer>
            <CartQuantityTitle>數量</CartQuantityTitle>
            <CartUnitPriceTitle>單價</CartUnitPriceTitle>
            <CartTotalAmountTitle>小計</CartTotalAmountTitle>
          </CartQtyPriceTotalContainer>
        </CartHeader>
        <CartDetailContainer>
          {cart.map((item, index) => (
            <CartDetails key={index}>
              <CartProductContainer>
                <CartProductImage src={item.prodImage} />
                <CartProductInfo>
                  <CartProductTitle>{item.prodTitle}</CartProductTitle>
                  <CartProductId>{item.prodId}</CartProductId>
                  <CartProductColor>
                    顏色｜{item.prodColorName}
                  </CartProductColor>
                  <CartProductSize>尺寸｜{item.prodSize}</CartProductSize>
                </CartProductInfo>
              </CartProductContainer>
              <CartProductQtyPriceTotalContainer>
                <CartProductQuantityDropDownContainer>
                  <CartProductQuantityDropDownText>
                    數量
                  </CartProductQuantityDropDownText>
                  <CartProductQuantityDropDown
                    defaultValue={item.prodQuantity}
                    onChange={(event) => dropDownHandleChange(event, item)}
                  >
                    {getDropDownMenu(item.prodStock)}
                  </CartProductQuantityDropDown>
                </CartProductQuantityDropDownContainer>
                <CartProductUnitPriceContainer>
                  <CartProductUnitPriceText>單價</CartProductUnitPriceText>
                  <CartProductUnitPrice>
                    TWD.{item.prodPrice}
                  </CartProductUnitPrice>
                </CartProductUnitPriceContainer>
                <CartProductUnitPriceContainer>
                  <CartProductUnitPriceText>小計</CartProductUnitPriceText>
                  <CartProductUnitPrice>
                    TWD.{item.prodQuantity * item.prodPrice}
                  </CartProductUnitPrice>
                </CartProductUnitPriceContainer>
                <CartTrashImage
                  src={Trash}
                  onClick={() => {
                    removeItem(item);
                  }}
                />
              </CartProductQtyPriceTotalContainer>
            </CartDetails>
          ))}
        </CartDetailContainer>
      </CartContainer>
      <PersonalInfoForm onSubmit={handleSubmit(onSubmit)}>
        <PersonalInfoContainer>
          <PersonalInfoHeader>
            <PersonalInfoTextTitle>訂購資料</PersonalInfoTextTitle>
          </PersonalInfoHeader>

          <PersonalInfoNameContainer>
            <PersonalInfoNameLabel htmlFor="chineseName">
              收件人姓名
            </PersonalInfoNameLabel>
            <PersonalInfoNameInput
              type="text"
              {...register("chineseName", {
                required: "＊請輸入中文全名",
                pattern: {
                  value: /^[\u4e00-\u9fa5]{2,}$/i,
                  message: "＊最少中文兩個字",
                },
              })}
            />
            {errors.chineseName && (
              <ErrorMessage>{errors.chineseName.message}</ErrorMessage>
            )}
          </PersonalInfoNameContainer>
          <PersonalInfoNameReminderContainer>
            <PersonalInfoNameReminder>
              務必填寫完整收件人姓名，避免包裹無法順利簽收
            </PersonalInfoNameReminder>
          </PersonalInfoNameReminderContainer>
          <PersonalInfoLabelContainer>
            <PersonalInfoLabel htmlFor="mobile">手機</PersonalInfoLabel>
            <PersonalInfoInput
              type="text"
              {...register("mobile", {
                required: "＊需為數字10碼",
                pattern: {
                  value: /^0[0-9]{8,9}$/,
                  message: "＊手機號碼格式不符合(開頭須為0)",
                },
              })}
              maxLength={10}
            />
            {errors.mobile && (
              <ErrorMessage>{errors.mobile.message}</ErrorMessage>
            )}
          </PersonalInfoLabelContainer>
          <PersonalInfoLabelContainer>
            <PersonalInfoLabel htmlFor="address">地址</PersonalInfoLabel>
            <PersonalInfoInput
              type="text"
              {...register("address", {
                required: "＊請輸入地址",
              })}
            />
            {errors.address && (
              <ErrorMessage>{errors.address.message}</ErrorMessage>
            )}
          </PersonalInfoLabelContainer>
          <PersonalInfoLabelContainer>
            <PersonalInfoLabel htmlFor="email">Email</PersonalInfoLabel>
            <PersonalInfoInput
              type="email"
              {...register("email", {
                required: "＊請輸入正確的電子郵件格式",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i,
                  message: "＊請輸入正確的電子郵件格式",
                },
              })}
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </PersonalInfoLabelContainer>
          <PersonalInfoDeliveryLabelContainer>
            <PersonalInfoLabel>配送時間</PersonalInfoLabel>
            <PersonalInfoDeliveryTimeContainer>
              <PersonalInfoDeliveryLabel>
                <PersonalInfoDeliveryInput type="radio" name="delivery-time" />
                08:00-12:00
              </PersonalInfoDeliveryLabel>
              <PersonalInfoDeliveryLabel>
                <PersonalInfoDeliveryInput type="radio" name="delivery-time" />
                14:00-18:00
              </PersonalInfoDeliveryLabel>
              <PersonalInfoDeliveryLabel>
                <PersonalInfoDeliveryInput type="radio" name="delivery-time" />
                不指定
              </PersonalInfoDeliveryLabel>
            </PersonalInfoDeliveryTimeContainer>
          </PersonalInfoDeliveryLabelContainer>
        </PersonalInfoContainer>
        <PaymentContainer>
          <PaymentHeader>
            <PaymentTextTitle>付款資料</PaymentTextTitle>
          </PaymentHeader>

          {/*<PaymentLabelContainer>
            <PaymentLabel htmlFor="credit-card">信用卡號碼</PaymentLabel>
            <PaymentInput
              type="password"
              name="credit-card"
              placeholder="**** **** **** ****"
            />
          </PaymentLabelContainer>
          <PaymentLabelContainer>
            <PaymentLabel htmlFor="expiry-date">有效期限</PaymentLabel>
            <PaymentInput type="tel" name="expiry-date" placeholder="MM / YY" />
          </PaymentLabelContainer>
          <PaymentLabelContainer>
            <PaymentLabel htmlFor="security-code">安全碼</PaymentLabel>
            <PaymentInput
              type="tel"
              name="security-code"
              placeholder="後三碼"
            />
            </PaymentLabelContainer>*/}
        </PaymentContainer>
        <ConfirmationContainer>
          <ConfirmationBox>
            <ConfirmationTotalAmountContainer>
              <ConfirmationTotalAmountText>總金額</ConfirmationTotalAmountText>
              <ConfirmationTotalAmountNumberContainer>
                <ConfirmationTotalAmountCurrency>
                  NT.
                </ConfirmationTotalAmountCurrency>
                <ConfirmationTotalAmountNumber>
                  {calcTotalAmount()}
                </ConfirmationTotalAmountNumber>
              </ConfirmationTotalAmountNumberContainer>
            </ConfirmationTotalAmountContainer>
            <ConfirmationShippingFeeContainer>
              <ConfirmationShippingFeeText>運費</ConfirmationShippingFeeText>
              <ConfirmationShippingFeeNumberContainer>
                <ConfirmationShippingFeeCurrency>
                  NT.
                </ConfirmationShippingFeeCurrency>
                <ConfirmationShippingFeeNumber>
                  {cart.length ? 30 : 0}
                </ConfirmationShippingFeeNumber>
              </ConfirmationShippingFeeNumberContainer>
            </ConfirmationShippingFeeContainer>
            <ConfirmationAmountPayableContainer>
              <ConfirmationAmountPayableText>
                應付金額
              </ConfirmationAmountPayableText>
              <ConfirmationAmountPayableNumberContainer>
                <ConfirmationAmountPayableCurrency>
                  NT.
                </ConfirmationAmountPayableCurrency>
                <ConfirmationAmountPayableNumber>
                  {cart.length ? calcTotalAmount() + 30 : 0}
                </ConfirmationAmountPayableNumber>
              </ConfirmationAmountPayableNumberContainer>
            </ConfirmationAmountPayableContainer>
          </ConfirmationBox>
          <ConfirmationButton type="submit">確認付款</ConfirmationButton>
        </ConfirmationContainer>
      </PersonalInfoForm>
      <TpField id="card-number"></TpField>
      <TpField id="card-expiration-date"></TpField>
      {/*<TpField id="card-ccv"></TpField>*/}
    </Main>
  );
};

export default Checkout;
