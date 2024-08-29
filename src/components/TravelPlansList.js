import React from 'react';
import '../styles/TravelPlansList.css';
import TravelPlanItem from './TravelPlanItem';

const TravelPlansList = ({ travelPlans, onDeletePlan }) => {
  return (
    <div className="travel-plans-section">
      <h3>My Travel Plans</h3>
      <div className="travel-plans-list">
        {travelPlans.map((plan, index) => (
          <TravelPlanItem plan={plan} index={index} onDeletePlan={onDeletePlan}/>
        ))}
      </div>
    </div>
  );
};

// Redux 관련 부분 (나중에 사용할 수 있도록 주석 처리)
/*
import { connect } from 'react-redux';
import { deletePlan } from '../redux/actions';

const mapStateToProps = (state) => ({
  travelPlans: state.travelPlans,
});

const mapDispatchToProps = {
  onDeletePlan: deletePlan,
};

export default connect(mapStateToProps, mapDispatchToProps)(TravelPlansList);
*/

export default TravelPlansList;
