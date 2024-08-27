import React from 'react';
import editIcon from '../assets/icon_edit.svg';
import '../styles/TravelPlansList.css';

const TravelPlansList = ({ travelPlans, onDeletePlan }) => {
  return (
    <div className="travel-plans-section">
      <h3>My Travel Plans</h3>
      <div className="travel-plans-list">
        {travelPlans.map((plan, index) => (
          <div key={index} className="travel-plan-card">
            <div className="travel-plan-header">
              <h4>{plan.tripName}</h4>
              <img src={editIcon} className="edit-plan-icon" />
            </div>
            <p>{plan.startDate} ~ {plan.endDate}</p>
            <button
              className="delete-plan-button"
              onClick={() => onDeletePlan(index)}
            >
              삭제
            </button>
          </div>
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
