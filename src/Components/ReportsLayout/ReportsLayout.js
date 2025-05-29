import "./ReportsLayout.css";

// Function component for giving reviews
const ReportsLayout = () => {
    const reports = [
        {
            "doctor": {
                "name": "Dr. John Doe",
                "speciality": "Cardiology",
            },
            "path": "reports/patient_report.pdf",
        },
        {
            "doctor": {
                "name": "Dr. Anna Strong",
                "speciality": "General Physician",
            },
            "path": "reports/patient_report.pdf",
        },
    ]

    return (
        <div className="reports">
            <h2>Reports</h2>
            {reports.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <table className='reports__table'>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Doctor Name</th>
                            <th>Doctor Speciality</th>
                            <th>View Report</th>
                            <th>Download Report</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports.map((report, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{report.doctor.name}</td>
                                <td>{report.doctor.speciality}</td>
                                <td>
                                    <a href={report.path} target="_blank" className='btn btn-primary'>View Report</a>
                                </td>
                                <td>
                                    <a href={report.path} download className='btn btn-primary'>Download Report</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default ReportsLayout;
