import React from 'react';
import { Spin } from 'antd';

interface IParams {
  ifShow: boolean;
  children: React.ReactNode;
}

export default ({ children, ifShow }: IParams): React.ReactNode => {
  return <Spin spinning={ifShow}>{children}</Spin>;
};
