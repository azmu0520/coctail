import styled from 'styled-components';
import { ReactComponent as arrow } from '../../assets/arrow.svg';
import { ReactComponent as suc } from '../../assets/suc.svg';
export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* justify-content: center; */
`;

Wrap.Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
`;

Wrap.Title = styled.div`
  font-weight: 700;
  font-size: 30px;
  line-height: 41px;
  display: flex;
  align-items: center;
  color: #16b7c1;
`;

Wrap.Descript = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #8692a6;
  margin: 22px 0 50px 0;
`;

Wrap.Input = styled.input`
  width: 426px;
  box-sizing: border-box;
  height: 64px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 14px;
  border: 1px solid #8692a6;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #8692a6;
  opacity: 0.6;
  outline: none;
  padding: 22px 30px;
  margin-bottom: 35px;
`;

Wrap.Button = styled.input`
  width: 426px;
  height: 64px;
  background: #0ca0a9;
  border-radius: 6px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffffff;
  outline: none;
  border: none;
`;

export const Success = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  background: linear-gradient(#cedfe3, #eaeaea);
`;

Success.Back = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  display: flex;
  margin: 65px 0 200px 90px;
  align-items: center;
  .link {
    text-decoration: none !important;
    color: #8692a6 !important;
  }

  position: ${({ top }) => (top ? 'absolute' : '')};
  top: 0;
`;

Success.Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 335px;
  height: 335px;
  background: rgba(9, 152, 118, 0.1);
  border-radius: 50%;
  position: relative;
`;

Success.Arrow = styled(arrow)`
  margin-right: 5px;
`;

Success.Text = styled.div`
  font-weight: 300;
  font-size: 30px;
  line-height: 38px;
  color: #099876;
  margin-top: 60px;
`;
Success.Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 50%;
  width: fit-content;
  transform: translate(-50%);
`;
Success.Suc = styled(suc)`
  background-color: #099876;
  width: 263px;
  height: 263px;
  padding: 50px;
  border-radius: 50%;
  box-sizing: border-box;
`;
