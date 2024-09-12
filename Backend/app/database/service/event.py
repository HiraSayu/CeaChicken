import boto3
from boto3.dynamodb.conditions import Attr
import os
from dotenv import load_dotenv

load_dotenv()
os.environ['AWS_ACCESS_KEY_ID'] = os.getenv('AWS_ACCESS_KEY_ID')
os.environ['AWS_SECRET_ACCESS_KEY'] = os.getenv('AWS_SECRET_ACCESS_KEY')


def register_event(event_data):
    dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
    table = dynamodb.Table('eventdb')

    table.put_item(
        Item={
            'user_id': event_data['user_id'],
            'event_name': event_data['event_name'],
            'time': event_data['time'],
            'where_to_meet': event_data['where_to_meet'],
            'food_preference': event_data['food_preference'],
            'type': event_data['type']
        }
    )
    print("Event registered successfully.")

def get_events_by_type(type):
    dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
    table = dynamodb.Table('eventdb')

    response = table.scan(
        FilterExpression=Attr('type').eq(type)
    )

    return response['Items']

if __name__ == '__main__':

    data1 = {
        'user_id': 'user66611',
        'event_name': 'Welcome Party',
        'time': '2024-09-15 18:00',
        'where_to_meet': 'Main Hall',
        'food_preference': 'Vegetarian',
        'type': 'international'
    }
    data2 = {
        'user_id': 'user44411',
        'event_name': 'Welcome Party',
        'time': '2024-09-15 18:00',
        'where_to_meet': 'Main Hall',
        'food_preference': 'Vegetarian',
        'type': 'international'
    }
    data3 = {
        'user_id': 'user98711',
        'event_name': 'Orientation',
        'time': '2024-09-16 10:00',
        'where_to_meet': 'Conference Room',
        'food_preference': 'Non-Vegetarian',
        'type': 'local'
    }
    # イベントの登録例
    # register_event(data1)
    # register_event(data2)
    # register_event(data3)

    # 指定したtypeに一致するすべてのイベントの表示例
    events = get_events_by_type('international')
    for event in events:
        print(event)
