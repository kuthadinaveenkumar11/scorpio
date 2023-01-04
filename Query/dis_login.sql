USE [scorpioDB]
GO

/****** Object:  Table [dbo].[distributerlogin]    Script Date: 12/27/2022 2:56:57 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[distributerlogin](
	[username] [nvarchar](50) NOT NULL,
	[password] [nvarchar](50) NOT NULL,
	[PANNo] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_distributer login] PRIMARY KEY CLUSTERED 
(
	[PANNo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[distributerlogin]  WITH CHECK ADD FOREIGN KEY([PANNo])
REFERENCES [dbo].[distributerprofile] ([PANNo])
GO


