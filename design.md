Jobly(App)
  Navbar

  Routes

    Homepage

    CompaniesContainer (/companies)
      state:
        - companies
        - isLoading

      renders:
        - SearchBar
        - CompaniesList
      
      CompanyList
        props:
          - companies

        renders:
          - CompanyCard

        CompanyCard
          props:
            - company

          renders:
            - info about a company

    CompanyDetails (/companies/:company)

      CompanyInfo
      
      JobsList

        Job

    JobsContainer (/jobs)
      state:
        - jobs
        - isLoading

      renders:
        - SearchBar
        - JobList
        
      JobList
        props:
          - jobs

        renders:
          - JobCard

      JobCard 
        props: job

        renders:
          - info about a job

    LoginForm

    SignupForm