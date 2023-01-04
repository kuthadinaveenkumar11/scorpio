USE [scorpioDB]
GO

/****** Object:  Table [dbo].[Wareproduct]    Script Date: 1/4/2023 12:48:52 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Wareproduct](
	[Name] [varchar](50) NOT NULL,
	[Product_id] [nvarchar](50) NOT NULL,
	[Price] [numeric](18, 0) NOT NULL,
	[Type] [nchar](10) NOT NULL,
	[Discription] [nvarchar](1000) NOT NULL,
	[image] [varchar](max) NOT NULL,
	[Quantity] [int] NOT NULL,
 CONSTRAINT [PK_Wareproduct] PRIMARY KEY CLUSTERED 
(
	[Product_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


