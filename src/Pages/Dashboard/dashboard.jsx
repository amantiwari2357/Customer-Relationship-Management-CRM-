import React from "react";
import Sidebar from "../../Component/Sidebar/sidebar";
import Topbar from "../../Component/Topbar/topbar";
import "./dashboard.css";
import { PieChart, Pie, Cell, Legend } from "recharts";
import { Bar } from "react-chartjs-2";
import team1 from "../../Images/admin-profile.jpeg";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend as ChartLegend,
} from "chart.js";
import {
  BarChart,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ChartLegend
);

const Dashboard = () => {
  // Pie chart data
  const data = [
    { name: "Stage 1", value: 400 },
    { name: "Stage 2", value: 300 },
    { name: "Stage 3", value: 300 },
    { name: "Stage 4", value: 200 },
    { name: "Stage 5", value: 278 },
    { name: "Stage 6", value: 189 },
  ];

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884D8",
    "#FF0000",
  ];

  // Calls Attempted Bar Chart Data
  const CallAttempt = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Calls Attempted",
        data: [40, 60, 30, 70, 50, 40, 80],
        backgroundColor: [
          "#FFC107",
          "#FF4081",
          "#673AB7",
          "#4CAF50",
          "#8BC34A",
          "#E91E63",
          "#FFEB3B",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  const leadsData = [
    {
      leadName: "Collins",
      companyName: "Novawave",
      phone: "+91 8882658961",
      leadStatus: "Contacted",
    },
    {
      leadName: "Konopelski",
      companyName: "Dreamsell",
      phone: "+91 7589185495",
      leadStatus: "Not Connected",
    },
    {
      leadName: "Adams",
      companyName: "Bluesky",
      phone: "+91 7851294635",
      leadStatus: "Contacted",
    },
    {
      leadName: "Schumm",
      companyName: "Silverhawk",
      phone: "+91 2458796188",
      leadStatus: "Contacted",
    },
    {
      leadName: "Collins",
      companyName: "Summitpeak",
      phone: "+91 5487896255",
      leadStatus: "Not Connected",
    },
    {
      leadName: "Konopelski",
      companyName: "Novawave",
      phone: "+91 5147886253",
      leadStatus: "Not Connected",
    },
    {
      leadName: "Adams",
      companyName: "Dreamsell",
      phone: "+91 2365487412",
      leadStatus: "Contacted",
    },
    {
      leadName: "Schumm",
      companyName: "Bluesky",
      phone: "+91 7458963215",
      leadStatus: "Not Connected",
    },
    {
      leadName: "Collins",
      companyName: "Conversation",
      phone: "+91 8965741232",
      leadStatus: "Contacted",
    },
  ];

  const TeamMember = [
    {
      teamImage: team1,
      name: "Gourav Panchal",
      position: "Frontend Developer",
      mail: <i class="bi bi-envelope"></i>,
      call: <i class="bi bi-telephone-outbound"></i>,
    },
    {
      teamImage: team1,
      name: "Vishnu",
      position: "Project Manager",
      mail: <i class="bi bi-envelope"></i>,
      call: <i class="bi bi-telephone-outbound"></i>,
    },
    {
      teamImage: team1,
      name: "Mannu Prashad Yadab",
      position: "Backend Developer",
      mail: <i class="bi bi-envelope"></i>,
      call: <i class="bi bi-telephone-outbound"></i>,
    },
    {
      teamImage: team1,
      name: "Dev Yadav",
      position: "UI / UX Developer",
      mail: <i class="bi bi-envelope"></i>,
      call: <i class="bi bi-telephone-outbound"></i>,
    },
  ];

  const dealsData = [
    {
      name: "Konopelski",
      lastContacted: "Nov 30, 2024",
      salesRepresentative: "Donald Risher",
      status: "Deal Won",
      dealValue: "$100.1 K",
    },
    {
      name: "Konopelski",
      lastContacted: "Nov 30, 2024",
      salesRepresentative: "Donald Risher",
      status: "Deal Loss",
      dealValue: "$54 K",
    },
    {
      name: "Konopelski",
      lastContacted: "Nov 30, 2024",
      salesRepresentative: "Donald Risher",
      status: "Deal Won",
      dealValue: "$125.1 K",
    },
    {
      name: "Konopelski",
      lastContacted: "Nov 30, 2024",
      salesRepresentative: "Donald Risher",
      status: "Deal Won",
      dealValue: "$154.1 K",
    },
    {
      name: "Konopelski",
      lastContacted: "Nov 30, 2024",
      salesRepresentative: "Donald Risher",
      status: "Deal Loss",
      dealValue: "$32 K",
    },
    {
      name: "Konopelski",
      lastContacted: "Nov 30, 2024",
      salesRepresentative: "Donald Risher",
      status: "Deal Loss",
      dealValue: "$57 K",
    },
    {
      name: "Konopelski",
      lastContacted: "Nov 30, 2024",
      salesRepresentative: "Donald Risher",
      status: "Deal Won",
      dealValue: "$2241 K",
    },
    {
      name: "Konopelski",
      lastContacted: "Nov 30, 2024",
      salesRepresentative: "Donald Risher",
      status: "Deal Won",
      dealValue: "$1851 K",
    },
    {
      name: "Konopelski",
      lastContacted: "Nov 30, 2024",
      salesRepresentative: "Donald Risher",
      status: "Deal Loss",
      dealValue: "$45 K",
    },
  ];

  const ShortlistedProfile = [
    { month: "Jan", profiles: 50 },
    { month: "Feb", profiles: 45 },
    { month: "Mar", profiles: 55 },
    { month: "Apr", profiles: 60 },
    { month: "May", profiles: 70 },
    { month: "Jun", profiles: 50 },
    { month: "Jul", profiles: 60 },
    { month: "Aug", profiles: 65 },
    { month: "Sep", profiles: 75 },
    { month: "Oct", profiles: 60 },
    { month: "Nov", profiles: 50 },
    { month: "Dec", profiles: 55 },
  ];

  const profileShared = [
    { week: "1", shared: 30, nonShared: 40 },
    { week: "2", shared: 60, nonShared: 40 },
    { week: "3", shared: 50, nonShared: 40 },
    { week: "4", shared: 30, nonShared: 10 },
    { week: "5", shared: 40, nonShared: 20 },
    { week: "6", shared: 50, nonShared: 20 },
    { week: "7", shared: 60, nonShared: 30 },
    { week: "8", shared: 50, nonShared: 30 },
    { week: "9", shared: 40, nonShared: 10 },
    { week: "10", shared: 20, nonShared: 10 },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main">
        <Topbar />
        <div className="dashboard-content">
          <h2>Dashboard</h2>
          <section className="dashboard-overview">
            <div className="row g-4">
              {[
                { label: "Total Profiles", value: "1058" },
                { label: "Total Follow Ups", value: "1000" },
                { label: "Paid Clients", value: "569" },
                { label: "Total Shortlisted", value: "485" },
              ].map((card, index) => (
                <div className="col-md-3" key={index}>
                  <div className="dashboard-card">
                    <p className="dashboard-card-label">{card.label}</p>
                    <p className="dashboard-card-value">{card.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="dashboard-details mt-5">
            <div className="row g-4">
              {/* Latest Leads */}
              <div className="col-md-6">
                <div className="dashboard-table-container">
                  <h2>Latest Leads</h2>
                  <table className="dashboard-table">
                    <thead>
                      <tr>
                        <th>Lead Name</th>
                        <th>Company Name</th>
                        <th>Phone</th>
                        <th>Lead Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leadsData.map((lead, index) => (
                        <tr
                          key={index}
                          className={index % 2 === 0 ? "row-even" : "row-odd"}
                        >
                          <td>{lead.leadName}</td>
                          <td>{lead.companyName}</td>
                          <td>{lead.phone}</td>
                          <td
                            className={
                              lead.leadStatus === "Contacted"
                                ? "status-contacted"
                                : "status-not-connected"
                            }
                          >
                            {lead.leadStatus}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Leads By Stage */}
              <div className="col-md-6 dashboard-table-container">
                <div>
                  <h3>Leads By Stage</h3>
                  <PieChart width={400} height={400}>
                    <Pie
                      data={data}
                      cx={150}
                      cy={150}
                      innerRadius={80}
                      outerRadius={110}
                      fill="#8884d8"
                      paddingAngle={1}
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Legend />
                  </PieChart>
                  <div
                    style={{
                      textAlign: "center",
                      marginTop: "-270px",
                      fontSize: "16px",
                      marginLeft: "-220px",
                    }}
                  >
                    Total Value
                    <br />
                    $9,999.99
                  </div>
                </div>
              </div>

              {/* Calls Attempted */}
              <div className="col-md-6">
                <div className="dashboard-table-container">
                  <h3>Calls Attempted</h3>
                  <div className="inner-card">
                    <Bar data={CallAttempt} options={options} />
                  </div>
                </div>
              </div>

              {/* Team member */}
              <div className="col-md-6">
                <div className="dashboard-table-container">
                  <h3>Team Member</h3>
                  <div className="team-inner-card">
                    <div className="row">
                      {TeamMember.map((member, index) => (
                        <div className="col-md-12" key={index}>
                          <div className="team-member-card">
                            <div className="row align-items-center">
                              {/* Team Image */}
                              <div className="col-md-2">
                                <img
                                  src={member.teamImage}
                                  alt={member.name}
                                  className="team-image"
                                />
                              </div>
                              {/* Name and Position */}
                              <div className="col-md-7">
                                <div className="team-info">
                                  <h6 className="team-member-name">
                                    {member.name}
                                  </h6>
                                  <p className="team-member-position">
                                    {member.position}
                                  </p>
                                </div>
                              </div>
                              {/* Social Media Links */}
                              <div className="col-md-3">
                                <div className="social-media-links">
                                  <a
                                    href={`mailto:${member.mail}`}
                                    className="mail-link"
                                  >
                                    {member.mail}
                                  </a>
                                  <a
                                    href={`tel:${member.call}`}
                                    className="call-link"
                                  >
                                    {member.call}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* deal status  */}
              <div className="col-md-6">
                <div className="dashboard-table-container">
                  <h3>Deals Status</h3>
                  <table class="dashboard-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Last Contacted</th>
                        <th>Sales Representative</th>
                        <th>Status</th>
                        <th>Deal Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dealsData.map((deal, index) => (
                        <tr key={index}>
                          <td>{deal.name}</td>
                          <td>{deal.lastContacted}</td>
                          <td>{deal.salesRepresentative}</td>
                          <td
                            className={
                              deal.status === "Deal Won"
                                ? "status-won"
                                : "status-loss"
                            }
                          >
                            {deal.status}
                          </td>
                          <td>{deal.dealValue}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

               {/* profile shared  */}
               <div className="col-md-6">
                <div className="dashboard-chart-container">
                  <h3>Profiles Sharded</h3>
                  <BarChart
                    width={500}
                    height={250}
                    data={profileShared}
                    margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="week"
                      label={{
                        value: "__Weekly__",
                        position: "bottom",
                        offset: -5,
                      }}
                    />
                    <YAxis
                      label={{
                        value: "__Number Of Profiles__",
                        angle: -90,
                        position: "insideLeft",
                      }}
                      domain={[0, 100]}
                    />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="nonShared"
                      stackId="a"
                      fill="#007bff"
                      name="Non Shared"
                    />
                    <Bar
                      dataKey="shared"
                      stackId="a"
                      fill="#48d1cc"
                      name="Shared"
                    />
                  </BarChart>
                </div>
              </div>

              {/* Shortlisted Profile */}
              <div className="col-md-6">
                <div className="col-md-6 dashboard-chart-container">
                  <h3>Shortlisted Profiles</h3>
                  <div className="inner-card">
                    <div className="profile-stats">
                      <div className="stat">
                        <h4>7854</h4>
                        <p>Profiles Approved</p>
                      </div>
                      <div className="stat">
                        <h4>5694</h4>
                        <p>Profiles Pending</p>
                      </div>
                      <div className="stat">
                        <h4>2354</h4>
                        <p>Profiles Rejected</p>
                      </div>
                    </div>
                    <AreaChart
                      width={500}
                      height={250}
                      style={{ marginLeft: "-2rem" }}
                      data={ShortlistedProfile}
                      margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="colorProfiles"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#007bff"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="#007bff"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="profiles"
                        stroke="#007bff"
                        fillOpacity={1}
                        fill="url(#colorProfiles)"
                      />
                    </AreaChart>
                  </div>
                </div>
              </div>

            
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
