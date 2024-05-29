import React from 'react'
import { AppContainer } from '../../../components/AppContainers'
import { H1 } from '../../../components/AppFonts'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { AppColors } from '../../../utils/Pallete';
import { Dimensions } from 'react-native';
import ProgressCardWidget from '../widgets/ProgressCardWidget';


export default function HomeScreen() {

  return (
    <AppContainer>
      <ProgressCardWidget
      title={'Você está quase lá!'}
      subtitle={'Tarefas semanais'}
      total={2000}
      actualProgress={450}
      tagText={'3 tarefas restantes'}
      />
    </AppContainer>
  )
}