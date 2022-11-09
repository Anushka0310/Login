
import axios from "axios";

class LoanService{

    getAllLoan(){
        return axios.get("http://localhost:8686/loanmanagementsystem/loanapi/getallcustomers");
    }

    addLoan(loan){
        return axios.post("http://localhost:8686/loanmanagementsystem/loanapi/addloandetails",loan);
    }

    deleteLoan(Id){
        return axios.delete("http://localhost:8686/loanmanagementsystem/loanapi/deleteloandetails/"+Id);
    }

    updateLoan(loan,Id){
        return axios.put("http://localhost:8686/loanmanagementsystem/loanapi/updatecustomer/"+Id,loan);
    } 

    getLoanDetails(Id){
        return axios.get("http://localhost:8686/loanmanagementsystem/loanapi/getloandetails/"+Id);
    }

}

export default new LoanService();