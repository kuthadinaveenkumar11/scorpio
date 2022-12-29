USE [scorpioDB]
GO

/****** Object:  Table [dbo].[Product]    Script Date: 12/28/2022 11:49:02 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Product](
	[Name] [varchar](50) NOT NULL,
	[Product_id] [nvarchar](50) NOT NULL,
	[Price] [numeric](18, 0) NOT NULL,
	[Type] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](1000) NOT NULL,
	[Image] [varbinary](max) NOT NULL,
	[Quantity] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Product_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


