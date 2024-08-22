import "./index.scss";
import { X } from "lucide-react";
import { ReactNode } from "react";
interface Iprops {
  title: string;
  icon: ReactNode;
  discription: string;
  type: string;
}

const Alert = ({ type, title, icon, discription }: Iprops) => {
  return (
      
    <div className={type}>
        <div className="flex-alert">
          <div className="alert-title">
            {icon}
            <h4>{title}</h4>
          </div>
          <X className="close" />
        </div>
        <p>
          {discription}
          
        </p>
      </div>
  );
};

export default Alert;
