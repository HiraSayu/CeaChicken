import boto3
import os


def insert_data(data):
    dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
    table = dynamodb.Table('profile')

    response = table.put_item(
        Item=data
    )

    print("Data inserted successfully:", response)

def get_data_by_id(user_id):
    dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
    table = dynamodb.Table('profile')

    try:
        response = table.get_item(
            Key={'user_id': user_id}
        )
        if 'Item' in response:
            return response['Item']
        else:
            return None
    except Exception as e:
        print(f"Error getting data: {e}")
        return None

if __name__ == '__main__':
    data = {
        'user_id': '1',
        'name': 'John Doe',
        'type': 'international',
        'nationality': 'American',
        'university': 'Harvard University',
        'major': 'Computer Science',
        'gender': 'Male'
    }
    # insert_data(data)
    print(get_data_by_id('1'))
