

USE [scorpioDB]

GO

/****** Object:  Table [dbo].[distributer profile]    Script Date: 27-12-2022 12:36:13 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[distributer profile](
	[Name] [varchar](50) NOT NULL,
	[ContactNumber] [numeric](18, 0) NOT NULL,
	[FirmName] [nchar](10) NULL,
	[Address] [nvarchar](50) NOT NULL,
	[TINNo] [int] NOT NULL,
	[PANNo] [nvarchar](50) NOT NULL,
	[BankIFSCCode] [nvarchar](50) NOT NULL,
	[BankAccountNumber] [numeric](18, 0) NOT NULL,
 CONSTRAINT [PK_distributer profile] PRIMARY KEY CLUSTERED 
(
	[PANNo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


