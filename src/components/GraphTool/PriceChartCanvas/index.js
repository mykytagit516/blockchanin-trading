import React from 'react';
import { inject, observer } from 'mobx-react';
import { compose, withProps } from 'recompose';

import { STORE_KEYS } from '@/stores';
import PriceChartLive from './PriceChartLive';
import PriceChartHistorical from './PriceChartHistorical';
import PriceChartToolbar from './PriceChartToolbar';

import { ChartWrapper } from './styles';

const PriceChartCanvas = ({ selectedFilterKey }) => {
  return (
    <ChartWrapper>
      <PriceChartToolbar />
      {selectedFilterKey ? <PriceChartHistorical /> : <PriceChartLive />}
    </ChartWrapper>
  );
};

export default compose(
  inject(STORE_KEYS.HISTORICALPRICESSTORE),
  observer,
  withProps(({ [STORE_KEYS.HISTORICALPRICESSTORE]: { selectedFilterKey } }) => ({
    selectedFilterKey
  }))
)(PriceChartCanvas);
