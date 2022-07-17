import axios from "axios";
import {useQuery} from "react-query";

export default function useGetEmployeeOfProject() {
    async function getEmployeeOfProject({queryKey}) {
        const [projectId] = queryKey;

        const res = await axios.get(`http://localhost:8080/api/employee/byProject/${projectId}`);

        return res.data;
    }

}